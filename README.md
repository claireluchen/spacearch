# Human-Environment Connection & Interaction Atlas

We  seek to visually depict the intricate connection between human emotions, psychology, and their surroundings. This interactive website serves as a user-friendly interface to help the public visualize challenges of extreme environments and their intricate relationships to design and behavioral health & performance. 
The homepage is an overview of factors associated with spaceflight: mission parameters, mediator variables, processes, outcomes, and mission success. <br>
Each subsequent layer provides insights into increasingly specific factors. User can interact with each factor to learn more about their definitions and their causal relationships to other factors. <br>

## Contributing

Project contributors: Mich Lin (design, content, management), Claire Chen (code base, layer structure), Kara Chou (UI, interactive elements)

The project is written in HTML, CSS, and Javascript. <br>
The home page is associated with 3 files: index.html, style1.css, zoomLayer1.js. <br>
The 2nd layer is associated with 3 files: layer2.html, style2.css, zoomLayer2.js. <br>
The 3rd layer is associated with 3 files: layer3.html, style3.css, zoomLayer3.js. <br>
To change the shape, color, etc. of the boxes, edit the corresponding css file. Each individual box is written as a class where you can make changes unique to the box (e.g. color, text). <br>
To change the content displayed upon hover/click, edit the corresponding javascript file. The explanation for each box is stored inside boxContents and can be edited individually. <br>

The interactive walkthrough is associated with 3 files: walkthrough.js, walkthrough.css, zoom-guide.css. <br>
To add or remove steps in the walkthrough, edit the "steps" array in walkthrough.js. Specifically, to add a step, add a dictionary to the "steps" array in your desired location with instructions (e.g. content, hover, etc). Ensure you adjust the "initialStep" constant to initialize which step we begin on depending on our layer (index, layer2, layer3).<br>
The help button on the bottom right is associated with 2 files: help-button.js, help-button.css. <br>
The navigation buttons on the bottom right are associated with 2 files: navigation-buttons.js, navigation-buttons.css. <br>

The graphs file stores the layer 3 graph in adjacency lists. The generatePath file generates all elements the current element is connected to.
