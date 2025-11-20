// **********************************************
// CURSOR POSITIONING: for fake cursor animations
// **********************************************
function getCursorPosition() {
  return { x: lastMouseX, y: lastMouseY };
}

// Initialize cursor position at center
let lastMouseX = window.innerWidth / 2;
let lastMouseY = window.innerHeight / 2;

// Update cursor position on mousemove
document.addEventListener("mousemove", (e) => {
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
});

// ***********
// WALKTHROUGH
// ***********
document.addEventListener("DOMContentLoaded", function () {
  // Check if walkthrough was completed in this session
  if (!sessionStorage.getItem("walkthroughCompleted")) {
    // Check layer (to initialize walkthrough to particular step)
    const isSecondLayer = window.location.pathname.includes("layer2.html");
    const isThirdLayer = window.location.pathname.includes("layer3.html");
    // initialStep should be adjusted if we add more steps
    // (e.g. if we add a step in between steps 1 and 2, increase isSecondLayer to step 4 and isThirdLayer to step 5)
    const initialStep = isSecondLayer ? 3 : isThirdLayer ? 4 : 0; // Set to step 0 on first layer, step 3 on second layer, and step 4 on third layer
    sessionStorage.setItem("currentWalkthroughStep", initialStep.toString());
    let currentStep = parseInt(
      sessionStorage.getItem("currentWalkthroughStep") || "0"
    );

    // *************************************************************************
    // ZOOM CONTROLS (walkthrough vs. normal) - referenced in zoomLayers 1, 2, 3
    // *************************************************************************
    if (window.zoomControls === undefined) {
      window.zoomControls = {
        // For normal zoom navigation
        normalZoom: {
          allow: false,
          enable: function () {
            this.allow = true;
          },
          disable: function () {
            this.allow = false;
          },
        },
        // For walkthrough zoom (only zoom in)
        walkthroughZoom: {
          allow: false,
          enable: function () {
            this.allow = true;
          },
          disable: function () {
            this.allow = false;
          },
        },
      };
    }

    // Normal zoom functionalities
    function enablePageNavigationZoom() {
      if (window.zoomControls) {
        window.zoomControls.normalZoom.enable();
        window.zoomControls.walkthroughZoom.disable();
      }
    }

    // Walkthrough zoom functionalities - only allows zoom in
    function enableWalkthroughZoom() {
      if (window.zoomControls) {
        window.zoomControls.walkthroughZoom.enable();
        window.zoomControls.normalZoom.disable();
      }
    }

    // Disables zoom entirely
    function disablePageNavigationZoom() {
      if (window.zoomControls) {
        window.zoomControls.normalZoom.disable();
        window.zoomControls.walkthroughZoom.disable();
      }
    }

    // Disable page navigation via zoom by default
    disablePageNavigationZoom();

    // ****************************
    // BUTTONS (+, -, ?) VISIBILITY
    // ****************************
    function setButtonsVisibility(visible, clickable = true) {
      const navButtons = document.getElementById("nav-buttons");
      if (navButtons) {
        navButtons.style.display = visible ? "flex" : "none";
        navButtons.style.pointerEvents = clickable ? "auto" : "none";
        // If clickable isn't true (on demonstrating buttons step), scale buttons (1.5x) for emphasis
        setTimeout(() => {
          navButtons.style.transition = "0.3s ease-in-out";
          navButtons.style.zIndex = clickable ? "1" : "2"; // Above background
          navButtons.style.bottom = clickable ? "60px" : "90px";
          navButtons.style.right = clickable ? "20px" : "30px";
          navButtons.style.transform = clickable ? "scale(1)" : "scale(1.5)";
        }, 10); // 10ms delay for scaling so we can observe scaling
      }

      const helpButton = document.getElementById("helpButton");
      if (helpButton) {
        helpButton.style.display = visible ? "flex" : "none";
        helpButton.style.pointerEvents = clickable ? "auto" : "none";
        // If clickable isn't true (on demonstrating buttons step), scale buttons (1.5x) for emphasis
        setTimeout(() => {
          helpButton.style.transition = "0.3s ease-in-out";
          helpButton.style.zIndex = clickable ? "1" : "2"; // Above background
          helpButton.style.right = clickable ? "20px" : "30px";
          helpButton.style.transform = clickable ? "scale(1)" : "scale(1.5)";
        }, 10); // 10ms delay for scaling so we can observe scaling
      }
    }

    // Hide buttons (help "?", zoom in "+", zoom out "-") by default
    setButtonsVisibility(false);

    // ************************************
    // CREATE ITEMS USED DURING WALKTHROUGH
    // ************************************

    // Create walkthrough HTML
    const walkthrough = document.createElement("div");
    walkthrough.id = "walkthrough";
    walkthrough.className = "walkthrough active";
    document.body.appendChild(walkthrough);

    // Create zoom guide container (for zoom in animation)
    const zoomGuideContainer = document.createElement("div");
    zoomGuideContainer.className = "zoom-guide-container";
    zoomGuideContainer.style.display = "none";
    zoomGuideContainer.innerHTML = `
            <div class="zoom-guide">
                <div class="zoom-guide-title">Mouse</div>
                <div class="mouse-guide">
                    <div class="mouse-wheel"></div>
                </div>
                <div>Scroll to zoom in</div>
            </div>
            <div class="zoom-guide">
                <div class="zoom-guide-title">Trackpad</div>
                <div class="trackpad-guide">
                    <div class="trackpad-fingers">
                        <div class="trackpad-finger trackpad-finger-1"></div>
                        <div class="trackpad-finger trackpad-finger-2"></div>
                    </div>
                </div>
                <div>Pinch to zoom in</div>
            </div>
        `;
    document.body.appendChild(zoomGuideContainer);

    // Create Exit Walkthrough button (top of screen)
    const exitWalkthroughBtn = document.createElement("button");
    exitWalkthroughBtn.id = "walkthroughExit";
    exitWalkthroughBtn.className = "walkthrough-exit";
    exitWalkthroughBtn.textContent = "Exit Walkthrough";
    exitWalkthroughBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeWalkthrough(true); // skipping = true (doesn't go to home page)
    });
    document.body.appendChild(exitWalkthroughBtn);

    // Create progress bar (top of screen)
    const progressBar = document.createElement("div");
    progressBar.className = "walkthrough-progress";
    progressBar.innerHTML = '<div class="walkthrough-progress-bar"></div>';
    document.body.appendChild(progressBar);

    // Create fake cursor (hover / click animations)
    const fakeCursor = document.createElement("div");
    fakeCursor.className = "walkthrough-cursor";
    document.body.appendChild(fakeCursor);

    // Add highlight overlay (for targets)
    const highlightOverlay = document.createElement("div");
    highlightOverlay.className = "walkthrough-highlight";
    document.body.appendChild(highlightOverlay);

    // *****************
    // WALKTHROUGH STEPS
    // *****************
    // These steps are used to indicate which functionalities to use during UpdateWalkthrough(),
    // and are run in order of entry.
    // To add a step, add a dictionary to the "steps" array in your desired location with instructions
    // (e.g. content, hover, etc). Ensure you adjust the "initialStep" constant above to initialize which
    // step we begin on depending on our layer (index, layer2, layer3).
    const steps = [
      {
        // content: modal with informational text
        content:
          "<strong> HECIA (Human-Environment Connection & Interaction Atlas)</strong> is a design tool that helps users explore the impact of isolated, confined, and extreme environments on behavioral health and performance.",
      },
      {
        // hover & target: has user hover over target to move to next step. fake cursor is animated to lead user to box
        hover: true,
        target: ".box:first-child",
        // timeout after hover (in ms)
        timeout: 500,
        // tooltip: tooltip at bottom of screen (instructs user)
        tooltip:
          '<strong style="color: #4CAF50;">Hover</strong> over boxes to see <br> their definitions',
      },
      {
        // zoom: shows zoom in animation, which minimizes to top left. only allows zoom in.
        zoom: true,
        tooltip:
          '<strong style="color: #4CAF50;">Zoom in</strong> to go to the next layer',
      },
      {
        // zoom_mini: same as zoom, but only shows minimized zoom animation
        zoom_mini: true,
        tooltip:
          'This is second layer. <br> <strong style="color: #4CAF50;">Zoom in</strong> again to go to the last layer',
      },
      {
        hover: true,
        target: ".openness",
        // timeout after hover (in ms)
        timeout: 500,
        tooltip:
          'This is the last layer. <br> <strong style="color: #4CAF50;">Hover</strong> over a factor to see its definition and connections ->',
      },
      {
        // click: has user click on target to move to next step. fake cursor is animated to lead user to click
        click: true,
        target: ".openness",
        // timeout after hover (in ms)
        timeout: 500,
        tooltip:
          '<strong style="color: #4CAF50;">Click</strong> on a factor to set the view',
      },
      {
        hover: true,
        target: ".curiosity",
        // timeout after hover (in ms)
        timeout: 500,
        tooltip:
          'Then <strong style="color: #4CAF50;">hover</strong> on a connection to read about their relationship ->',
      },
      {
        // clickanywhere: has user click anywhere on screen to move to next step. resets third layer.
        clickanywhere: true,
        // timeout after hover (in ms)
        timeout: 500,
        tooltip:
          '<strong style="color: #4CAF50;">Click anywhere</strong> to reset the view',
      },
      {
        // tipContent: modal with informational text (related to website mechanics - says "TIP" at top)
        tipContent: `You may <strong style="color: #4CAF50;">zoom out</strong> to return to previous layers.
        <div class="zoom-guide-container-out">
          <div class="zoom-guide-out">
            <div class="zoom-guide-title-out">Mouse</div>
            <div class="mouse-guide-out">
              <div class="mouse-wheel-out"></div>
            </div>
            <div>Scroll to zoom out</div>
          </div>
          <div class="zoom-guide-out">
            <div class="zoom-guide-title-out">Trackpad</div>
            <div class="trackpad-guide-out">
              <div class="trackpad-fingers-out">
                <div class="trackpad-finger-out trackpad-finger-1-out"></div>
                <div class="trackpad-finger-out trackpad-finger-2-out"></div>
              </div>
            </div>
            <div>Pinch to zoom out</div>
          </div>
        </div>
          `,
        // zoomout: shows zoom out animation within tipModal.
        zoomout: true,
      },
      {
        tipContent: `
          <div class="walkthrough-button-demo">
            <div class="walkthrough-button-group">
              <button class="walkthrough-nav-button">+</button>
              <div class="walkthrough-button-label">Zoom In</div>
            </div>
            <div class="walkthrough-button-group">
              <button class="walkthrough-nav-button">−</button>
              <div class="walkthrough-button-label">Zoom Out</div>
            </div>
            <div class="walkthrough-button-group">
              <button class="walkthrough-help-button">?</button>
              <div class="walkthrough-button-label">Help</div>
            </div>
          </div>
          <br>
          Use <strong style="color: #4CAF50;">+</strong> and <strong style="color: #4CAF50;">-</strong> buttons in the corner to move between layers<br><br>
          The <strong style="color: #4CAF50;">?</strong> button summarizes this walkthrough
        `,
        buttons: true, // To show +, -, and ? buttons (previously hidden)
      },
      {
        final: true, // Cleanup buttons
        content: `Have fun exploring! Please note that this framework is a point of departure. The relationships mapped here are just as important as the arguments, reactions, and agreements that follow. <br><br> We welcome thoughts and dialogue sent to <br> <a href= "mailto:hecia-info@mit.edu">hecia-info@mit.edu</a>`,
        buttonText: "Finish",
      },
    ];

    // Initialize walkthrough content
    async function updateWalkthrough() {
      const step = steps[currentStep];
      const isLastStep = currentStep === steps.length - 1;

      // Update Progress Bar
      const progressBar = document.querySelector(".walkthrough-progress");
      const progressBarInner = document.querySelector(
        ".walkthrough-progress-bar"
      );
      const totalSteps = steps.length - 1; // Total steps (0-based index)
      const currentProgress = Math.min(currentStep, totalSteps);
      const progressPercent = (currentProgress / totalSteps) * 100;
      progressBar.classList.add("visible");
      progressBarInner.style.width = `${progressPercent}%`;

      // Clean up existing interactive elements and content
      const existingTooltips = document.querySelectorAll(
        ".walkthrough-tooltip"
      );
      existingTooltips.forEach((tooltip) => tooltip.remove());
      const existingContent = document.querySelectorAll(".walkthrough-content");
      existingContent.forEach((content) => content.remove());

      // Dark background for particular steps
      if (step.content || step.hover || step.click || step.tipContent) {
        walkthrough.style.background = "rgba(0, 0, 0, 0.4)";
        walkthrough.style.pointerEvents = "auto";
      } else {
        walkthrough.style.background = "none";
        walkthrough.style.pointerEvents = "none";
      }

      // Reset zoom guide state when leaving zoom step
      if (zoomGuideContainer && (!step.zoom || !step.zoom_mini)) {
        zoomGuideContainer.style.display = "none";
      }

      // ******************************************
      // WALKTHROUGH CONTENT (tip or content modal)
      // ******************************************
      walkthrough.innerHTML = `
        ${
          step.tipContent
            ? `
            <div class="walkthrough-tip" style="opacity: 0;">
                <div class="tip-header">TIP</div>
                <div class="tip-content">
                    <p>${step.tipContent}</p>
                    <div class="walkthrough-nav">
                        <button class="walkthrough-next">Got it!</button>
                    </div>
                </div>
            </div>
            `
            : step.content
            ? `
            <div class="walkthrough-content" style="opacity: 0">
                <p>${step.content}</p>
                <div class="walkthrough-nav">
                    <button class="walkthrough-next ${
                      isLastStep ? "finish-button" : ""
                    }">
                        ${step.buttonText || "Next"}
                    </button>
                </div>
            </div>
            `
            : ""
        }
      `;

      if (step.tipContent) {
        // Tip Modal
        await new Promise((resolve) => setTimeout(resolve, 50));
        const tipModal = walkthrough.querySelector(".walkthrough-tip");
        if (tipModal) {
          tipModal.style.opacity = "1";
          tipModal.style.transform = "translate(-50%, -50%)";
          tipModal.classList.add("visible");
        }
      } else {
        // Content Modal (if exists)
        await new Promise((resolve) => setTimeout(resolve, 50));
        const newContent = walkthrough.querySelector(".walkthrough-content");
        if (newContent) {
          newContent.style.opacity = "1";
          newContent.style.transform = "translateY(0)";
        }
      }

      // Next Button within content and tip modals
      let nextButton = walkthrough.querySelector(".walkthrough-next");
      if (nextButton) {
        nextButton.addEventListener("click", () => {
          // If completing walkthrough: close and navigate home
          if (isLastStep) {
            sessionStorage.setItem("walkthroughCompleted", "true");
            closeWalkthrough();
            enablePageNavigationZoom();
            setTimeout(() => {
              window.location.href = "index.html";
            }, 300); // 300ms delay before navigating home
          } else {
            nextStep();
          }
        });
      }

      // *******
      // TOOLTIP
      // *******
      if (step.tooltip) {
        const tooltip = document.createElement("div");
        tooltip.className = "walkthrough-tooltip";
        tooltip.innerHTML = step.tooltip;
        document.body.appendChild(tooltip);
        step.tooltipElement = tooltip;
        setTimeout(() => {
          tooltip.classList.add("visible");
        }, 500);
      }

      // **********
      // HOVER STEP
      // **********
      if (step.hover) {
        // Disable zooming
        disablePageNavigationZoom();

        // Get target element
        const targetElement = document.querySelector(step.target);
        if (targetElement) {
          // Add hover effect to target
          targetElement.classList.add("walkthrough-target");

          // Get target rect for animation
          const targetRect = targetElement.getBoundingClientRect();

          // Force reflow and animate in
          highlightOverlay.style.opacity = "0.7";

          // Show fake cursor
          fakeCursor.style.opacity = "1";
          fakeCursor.classList.add("pulsing");
          fakeCursor.style.display = "block";

          // Repeated fake cursor animation showing the user where to hover
          const animateCursorOnce = () => {
            const startPos = getCursorPosition();
            // Reset instantly to current pointer position
            fakeCursor.style.transition = "none";
            fakeCursor.style.left = `${startPos.x}px`;
            fakeCursor.style.top = `${startPos.y}px`;
            // Force reflow
            void fakeCursor.offsetWidth;
            // Animate to the target centre
            const endX = targetRect.left + targetRect.width / 2;
            const endY = targetRect.top + targetRect.height / 2;
            fakeCursor.style.transition = "left 1s ease-out, top 1s ease-out"; // 1 second to move to final
            fakeCursor.style.left = `${endX}px`;
            fakeCursor.style.top = `${endY}px`;
          };

          // Run once immediately and then every 4 seconds
          animateCursorOnce();
          step.cursorInterval = setInterval(animateCursorOnce, 4000);

          // When the target is hovered, stop the animation
          const onHover = () => {
            // Clear cursor and highlight
            targetElement.removeEventListener("mouseenter", onHover);
            clearInterval(step.cursorInterval);
            fakeCursor.style.opacity = "0";
            fakeCursor.classList.remove("pulsing");
            highlightOverlay.style.display = "none";

            // Only remove background and tooltip if next step isn't a click on the same element
            const isNextStepClickOnSameTarget =
              steps[currentStep + 1]?.click &&
              steps[currentStep + 1]?.target === step.target;

            if (!isNextStepClickOnSameTarget) {
              walkthrough.style.background = "none";
              walkthrough.style.pointerEvents = "none";

              // Only remove walkthrough-target class if not transitioning to click on same element
              [".openness", ".curiosity"].forEach((sel) => {
                document.querySelectorAll(sel).forEach((el) => {
                  if (el !== targetElement) {
                    el.classList.remove("walkthrough-target");
                  }
                });
              });
              targetElement.classList.remove("walkthrough-target");
            }

            if (step.timeout) {
              // If we specify a timeout after hover, only proceed after timeout ms
              setTimeout(() => {
                nextStep();
              }, step.timeout);
            } else {
              // Immediately proceed to next step
              nextStep();
            }
          };

          targetElement.addEventListener("mouseenter", onHover);
        }
      }

      // *********
      // ZOOM STEP
      // *********
      if (step.zoom) {
        // For zoom step, enable walkthrough zoom functionality
        enableWalkthroughZoom();

        // Show zoom guide with a timeout
        if (zoomGuideContainer) {
          zoomGuideContainer.style.display = "flex";
          // After 3 seconds, minimize to bottom right corner and show tooltip
          setTimeout(() => {
            if (zoomGuideContainer) {
              zoomGuideContainer.classList.add("minimized");
            }
          }, 3000); // Minimizes after 3 seconds
        }
      }

      // *************************************************
      // ZOOM SECOND STEP (only shows minimized animation)
      // *************************************************
      if (step.zoom_mini) {
        // Enable walkthrough zoom functionality
        enableWalkthroughZoom();

        // Show zoom guide
        if (zoomGuideContainer) {
          zoomGuideContainer.classList.add("minimized");
        }
      }

      // **********
      // CLICK STEP
      // **********
      if (step.click) {
        // Add walkthrough-target class to explanation box to make it stand out
        const explanationBox = document.querySelector(".explanation");
        if (explanationBox) {
          explanationBox.classList.add("walkthrough-target");
        }

        // Get target element
        const targetElement = document.querySelector(step.target);
        if (targetElement) {
          // Add hover effect to target with transition
          targetElement.classList.add("walkthrough-target");

          // Show elements immediately but with initial state
          highlightOverlay.style.opacity = "0.7";

          // Get target rect for animation
          const targetRect = targetElement.getBoundingClientRect();

          // Ensure cursor is visible and reset any transitions
          fakeCursor.style.transition = "none";
          fakeCursor.classList.add("pulsing");
          fakeCursor.style.opacity = "1";
          fakeCursor.style.display = "block";

          // Position the cursor at the current mouse position
          const currentPos = getCursorPosition();
          fakeCursor.style.left = `${currentPos.x}px`;
          fakeCursor.style.top = `${currentPos.y}px`;
          fakeCursor.offsetHeight;

          // Animate cursor to target
          const endX = targetRect.left + targetRect.width / 2;
          const endY = targetRect.top + targetRect.height / 2;
          fakeCursor.style.transition = "left 1s ease-out, top 1s ease-out";
          fakeCursor.style.left = `${endX}px`;
          fakeCursor.style.top = `${endY}px`;
          fakeCursor.style.cursor = "pointer";

          // When target is clicked
          const onClick = () => {
            targetElement.removeEventListener("click", onClick);

            // Clean up
            fakeCursor.style.opacity = "0";
            fakeCursor.classList.remove("pulsing");
            highlightOverlay.style.opacity = "0";

           if (step.timeout) {
              // If we specify a timeout after hover, only proceed after timeout ms
              setTimeout(() => {
                nextStep();
              }, step.timeout);
            } else {
              // Immediately proceed to next step
              nextStep();
            }
          };

          targetElement.addEventListener("click", onClick);
        }
      }

      // ********************************
      // CLICK ANYWHERE (reset 3rd layer)
      // ********************************
      if (step.clickanywhere) {
        walkthrough.style.pointerEvents = "auto";

        // Add click handler to document to go to next step
        const onClick = () => {
          // Clean up
          document.removeEventListener("click", onClick);

          // Remove elements after animation and go to next step
          setTimeout(() => {
            // Ensure explanation box is cleaned up before next step
            const explanationBox = document.querySelector(".explanation");
            if (explanationBox) {
              explanationBox.classList.remove("walkthrough-target");
            }
            nextStep();
          }, 100); // 100ms delay
        };

        // Add click listener
        document.addEventListener("click", onClick);
      }

      // ************
      // SHOW BUTTONS
      // ************
      if (step.buttons) {
        // Show buttons but make them non-clickable
        setButtonsVisibility(true, false);
      }

      // ***************
      // CLEANUP BUTTONS
      // ***************
      if (step.final) {
        setButtonsVisibility(true, true);
        walkthrough.style.background = "rgba(0, 0, 0, 0.4)";
      }
    }

    function nextStep() {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateWalkthrough();
      }
    }

    // *****************
    // CLOSE WALKTHROUGH
    // *****************
    window.closeWalkthrough = function (skipped = false) {
      // Remove all walkthrough visuals and stop animations
      [
        ".walkthrough",
        ".walkthrough-highlight",
        ".walkthrough-tooltip",
        ".walkthrough-cursor",
        ".zoom-guide-container",
        "#walkthroughExit",
      ].forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => el.remove());
      });

      // Clean up remaining walkthrough elements
      const elementsToRemove = [
        ".walkthrough-target",
        ".walkthrough-tooltip",
        ".walkthrough-highlight",
        ".walkthrough-cursor",
      ];

      // Remove walkthrough classes from all elements
      document.querySelectorAll(elementsToRemove.join(",")).forEach((el) => {
        el.classList.remove("walkthrough-target", "walkthrough-highlight");
      });

      // Remove exit button
      const exitBtn = document.getElementById("walkthroughExit");
      if (exitBtn) {
        exitBtn.remove();
      }

      // Re-enable page navigation
      if (window.enablePageNavigationZoom) {
        enablePageNavigationZoom();
      }

      // Mark walkthrough as completed
      sessionStorage.setItem("walkthroughCompleted", "true");

      // Show and enable buttons when walkthrough ends
      setButtonsVisibility(true, true);

      if (skipped) {
        // User exited early – just refresh current page
        setTimeout(() => window.location.reload(), 200); // 200ms delay
      } else {
        // Completed – go back to homepage
        setTimeout(() => {
          window.location.href = "index.html";
        }, 200); // 200ms delay
      }
    };

    // Add walkthrough styles CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "walkthrough.css";
    document.head.appendChild(link);

    // Add zoom guide styles CSS
    const zoomGuideLink = document.createElement("link");
    zoomGuideLink.rel = "stylesheet";
    zoomGuideLink.href = "zoom-guide.css";
    document.head.appendChild(zoomGuideLink);

    // Initialize first step
    updateWalkthrough();
  }
});
