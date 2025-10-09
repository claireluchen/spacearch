//zoom events for layer navigation
window.addEventListener(
  "wheel",
  (e) => {
    const isZoomingIn = e.deltaX < 0 || e.deltaY < 0;
    const isZoomingOut = e.deltaX > 0 || e.deltaY > 0;

    // Check if zoom navigation is allowed
    if (window.zoomControls) {
      // Block zoom if 1. No zoom controls enabled, or 2. Walkthrough zoom and trying to zoom out
      if (
        (!window.zoomControls.normalZoom.allow &&
          !window.zoomControls.walkthroughZoom.allow) ||
        (isZoomingOut && window.zoomControls.walkthroughZoom.allow)
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }

    e.preventDefault();
    console.log("wheel");

    // Zooming in, leads to layer 3
    if (isZoomingIn) {
      window.location.href = "layer3.html";
    }
    // Zooming out, leads to layer 1
    else if (isZoomingOut) {
      window.location.href = "index.html";
    }
  },
  { passive: false, capture: true }
);

/*HOVERING, displays text within the box
Define content for each box, CHANGE EXPLANATION TEXTS HERE*/
var boxContents = {
  // selection: {
  //   title: "Selection",
  //   explanation: "How we choose crew for the mission",
  // },
  chronic_stressors: {
    title: "Chronic Stressors",
    explanation: "Stressors that are ever-present",
  },
  acute_stressors: {
    title: "Acute Stressors",
    explanation: "Stressors that are limited in duration",
  },
  social_composition: {
    title: "Social Composition",
    explanation: "Social variables for living and working with others",
  },
  individual_traits: {
    title: "Individual Traits",
    explanation:
      "Individual traits accounting for variation, including genetics and personality. Personality traits are based on Costa and McCrea’s 'Big Five' five-factor model of personality, based on empirical research and widely used and adapted as a measurement scale (NEO-PI-R, IPIP-NEO, IPIP-NEO-120 [used by NASA]).",
  },
  resources: {
    title: "Resources",
    explanation: "What we have at our disposal",
  },
  environmental_stressors: {
    title: "Environmental Stressors",
    explanation: "Aspects of the environment that may be challenging",
  },
  designed_features: {
    title: "Designed Features",
    explanation: "What we design for in the habitat",
  },
  operational_stressors: {
    title: "Operational Stressors",
    explanation: "Challenges due to how we operate the mission",
  },
  team_processes: {
    title: "Team Processes",
    explanation:
      "People working together to achieve a goal beyond the capabilities of each individual alone",
  },
  individual_processes: {
    title: "Individual Processes",
    explanation: "Actions or activities primarily on the individual level",
  },
  behavioral_health_and_performance_outcomes: {
    title: "Behavioral Health and Performance Outcomes",
    explanation:
      "Behavioral health and performance outcomes we care about. We do not distinguish between mood, affect, and performance outcomes due to the interrelationship between these constructs. Select constructs from Brene Brown’s Atlas of the Heart are referenced here, in addition to salient BHP outcomes for spaceflight.",
  },
  // loss_of_mission: {
  //     title: "Loss of Mission",
  //     explanation: "Explanation for Loss of Mission."
  // },
  // loss_of_crew_life: {
  //     title: "Loss of Crew Life",
  //     explanation: "Explanation for Loss of Crew Life."
  // },
  // quality_of_life: {
  //     title: "Quality of Life",
  //     explanation: "Explanation for Quality of Life."
  // },
};

document.addEventListener("DOMContentLoaded", function () {
  // Get all inner box elements
  var innerBoxes = document.querySelectorAll(".box > div");

  // Format text to the desired format
  function formatToLayerName(text) {
    return text.trim().toLowerCase().replace(/\s+/g, "_");
  }

  // Event listeners to each inner box
  innerBoxes.forEach(function (innerBox) {
    // Store the original content
    if (!innerBox.dataset.originalContent) {
      innerBox.dataset.originalContent = innerBox.innerHTML;
    }

    // Preload the content
    var boxElement = innerBox.closest(".box");
    if (boxElement) {
      var layerName = formatToLayerName(innerBox.textContent);
      var content = boxContents[layerName];

      if (content) {
        // Create content div but keep it hidden initially
        var contentDiv = document.createElement("div");
        contentDiv.className = "content";
        contentDiv.innerHTML = `
                    <div class="box-title">${content.title}</div>
                    <div class="box-explanation">${content.explanation}</div>`;

        innerBox.dataset.content = contentDiv.outerHTML;
      }
    }

    // Mouse enter handler
    innerBox.addEventListener("mouseenter", function () {
      if (innerBox.dataset.content) {
        innerBox.innerHTML = innerBox.dataset.content;
        // Force reflow to ensure transition works
        void innerBox.offsetWidth;
        // Add class to trigger transition
        innerBox.querySelector(".content").classList.add("show-explanation");
      }
    });

    // Mouse leave handler
    innerBox.addEventListener("mouseleave", function () {
      innerBox.innerHTML = innerBox.dataset.originalContent;
    });
  });
});
