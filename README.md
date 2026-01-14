## Human-Environment Connection & Interaction Atlas

We seek to causally map complex connections between human behavioral health and their surroundings in isolated, confined, and extreme environments. This interactive website serves as a user-friendly interface to help visualize challenges of extreme environments and their impact on design and behavioral health & performance. The homepage is an overview of factors associated with spaceflight: mission parameters, mediator variables, processes, outcomes, and mission success. Each subsequent layer provides insights into increasingly specific factors. User can interact with each factor to learn more about their definitions and their causal relationships to other factors.

Project contributors: Mich Lin (design, content, management), Claire Chen (code base, layer structure, interactive elements), Kara Chou (UI, interactive elements)

---
## Contributing

HECIA has 3 layers that zoom progressively into detail:
- **Layer 1** (`index.html`) - 4 high-level categories
- **Layer 2** (`layer2.html`) - Mid-level factors grouped by category
- **Layer 3** (`layer3.html`) - Detailed factors with connections

**Each layer has 3 files:** HTML (structure), CSS (appearance), JS (content/interactivity)

---

## Naming Rules

**Variable names must exactly match display names**. For example, `social_composition` matches "Social Composition". Abbreviations like `social_comp` for "Social Composition" will not work.

**Factor names:** lowercase_with_underscores
- e.g. `mission_duration`, `distance_from_home_earth`
- Not `Mission-Duration`, `Distance From Home`

**Connection names:** `parent_child`
- e.g. `isolated_stress`, `food_anxiety`

---

## Interactive Behaviors

| Behavior | Controlled by |
|----------|---------------|
| **Hover text** (definitions & relationships) | `boxContents` entries (e.g., `factor_name`, `parent_child`) in JavaScript files|
| **Highlighting & Arrows** | `getChildBoxes()` and `getRelatedBoxes()` functions in Javascript files|

---

## Quick Guide: How to Add a Factor

Most additions happen on Layer 3. Follow these steps to add a parent factor and its connections to child factors:

1. **Identify the layer** - Usually Layer 3 for detailed factors
2. **Add HTML** - Add `<div class="factor_name">Display Name</div>` in the appropriate place:
```html
<div class="social_composition"> 
    Social Composition
    <div class="crew_size">Crew Size</div> <!-- Crew Size factor falls under Social Composition -->
    <div class="new_factor">New Factor</div>
    ...
</div>
```
3. **Add CSS** - Add `.factor_name,` to general list, then add positioning in a separate `.factor_name {...}`
4. **Add JavaScript definitions** - In `zoomLayer3.js`:
   - Add `factor_name` entry to `boxContents` (hover text)
   - Add `factor_name_factor_name` entry to `boxContents` (self-reference for clicked state)
   - Add connections like `parent_child` and `child_parent` entries
   - Add case to `getChildBoxes()` (child factors this parent points to)
   - Add case to `getRelatedBoxes()` (all connected parent and child factors)
   - Update child factors' `getChildBoxes()` and `getRelatedBoxes()` cases

The above instructions add an individual parent factor and its connections to child factors. See the section at the bottom if you want the factor to point to a group (e.g., `isolated` points to the entire `Team Processes`).

---

## What if I want to edit high-level categories? (Layer 1)

**Files:** `index.html`, `style1.css`, `zoomLayer1.js`

Layer 1 shows boxes for 4 high-level categories: Mission Parameters, Mediator Variables, Processes, and Outcomes.

### 1. HTML
```html
<div class="box box1">
  <div class="content">Mission Parameters</div>  <!-- box1-4 -->
</div>
```

### 2. CSS
Key properties to change when adding/modifying a category in `style1.css`:
```css
.box1 {
  width: calc(12vw);     /* Column width */
  margin-left: 0.5%;     /* Spacing */
}
```

### 3. JavaScript
```javascript
box1: {
  title: "Mission Parameters",
  explanation: "Aspects of the planned mission"
},
```

---

## What if I want to add a mid-level category? (Layer 2)

**Files:** `layer2.html`, `style2.css`, `zoomLayer2.js`

Layer 2 shows category-level factors. For example, "Processes" is broken down into "Team Processes" and "Individual Processes").

### 1. HTML
We can add detailed factors under each high-level category in `layer2.html`. For example, "Team Processes" and "Individual Processes" fall under "Processes".
```html
<div class="box box3"> <!-- Process box -->
    <div class="team_processes">Team Processes</div>  <!-- ADD -->
    <div class="individual_processes">Individual Processes</div>  <!-- ADD -->
</div>
```

### 2. CSS
Key properties to change when adding a new mid-level category in `style2.css`:
```css
.individual_processes {
  width: calc(93%);           /* Width relative to parent */
  height: calc(52%);          /* Height relative to parent */
  top: calc(X%);              /* Vertical position */
  left: calc(X%);             /* Horizontal position */
  padding: 15px;
  background-color: #cc79a7;
}
```

### 3. JavaScript
We can display and modify the description for each factor in `zoomLayer2.js`.
```javascript
individual_processes: {
    title: "Individual Processes",
    explanation: "Actions or activities primarily on the individual level",
}
```

---

## What if I want to add a detailed factor with connections? (Layer 3)

**Files:** `layer3.html`, `style3.css`, `zoomLayer3.js`

**Arrows:** as a directed acyclic graph, arrows only flow left to right (parent → child).

### 1. HTML
We can add more detailed factors into each category in `layer3.html`. For example, "Stress Regulation" and "Place Attachment" fall under "Individual Processes", which falls under "Processes".
```html
<div class="box box3">
    <div class="individual_processes"> Individual Processes
        <div class="stress_regulation">Stress Regulation</div>
        <div class="place_attachment">Place Attachment</div>
    ...
</div>
```
The hierarchy looks like:
```
box3 - Processes
    ├── individual_processes
        ├── stress_regulation, place_attachment ...
    ...
```

### 2. CSS
Key properties for positioning factors in `style3.css`:
```css
.stress_regulation {
  width: calc(80%);           /* Width relative to parent */
  height: calc(12%);          /* Height relative to parent */
  top: calc(57.5%);           /* Vertical position */
  left: calc(10%);            /* Horizontal position (or use right) */
  background-color: #cc79a7;
}
```

### 3. JavaScript

We can display and modify the description for each factor in `zoomLayer3.js`.
```javascript
stress_regulation: {
    title: "Stress Regulation",
    explanation: "Stress regulation is the process of responding, managing ...",
}
```

Each factor also needs a **self-reference** entry for the clicked state to show hover text:
```javascript
stress_regulation_stress_regulation: {
    title: "Stress Regulation",
    explanation: "Stress regulation is the process of responding, managing ...",
}
```

We can also display and modify the description for how factors connect to each other; this allows users to click on the parent factor and hover over the child. For example, "Stress Regulation" has an arrow leading to "Depression". When users click on "Stress Regulation" and hover over "Depression", they could read more about the relationship.
```javascript
stress_regulation_depression: {
    title: "Stress Regulation &#8594; Depression",
    explanation: "Effective regulation strategies have been linked to improved mental ...",
}
```

We also require **both directions** to be defined; users can read about the relationship between `parent` and `child` when they click on `parent` and hover over `child`, or click on `child` and hover over `parent`:
```javascript
// Also add the reverse connection
depression_stress_regulation: {
    title: "Stress Regulation &#8594; Depression",
    explanation: "Effective regulation strategies have been linked to improved mental ...",
}
```

**Highlighting/arrows** — `getChildBoxes()` returns child factors this parent points to:
```javascript
function getChildBoxes(boxName) {
    switch (boxName) {
        case "stress_regulation":
            return ["stress_regulation", "depression" ...]; // self + children
        ...
    }
}
```

We keep track of all factors that lead to a given factor, and all factors a given factor leads to with `getRelatedBoxes()`. For example, "Resilience" points to "Stress Regulation", and "Stress Regulation" has an arrow pointing to "Depression". This function needs to be updated with the corresponding parent and child factors when adding an arrow.
```javascript
function getRelatedBoxes(boxName) {
    switch (boxName) {
        case "stress_regulation":
            return ["stress_regulation", "resilience", "depression" ...]; // self + parents + children
        ...
    }
}
```

---

## What if I want to add a factor pointing to a Layer 2 group?

Sometimes you want a Layer 3 factor to connect to a Layer 2 category box (e.g., "Isolated" pointing to "Team Processes" as a group). Use **invisible boxes** with the naming convention `factorname_invisible`.

**Note:** All factors nested within an "invisible" Layer 2 box must be included along with the invisible box in `getChildBoxes()` and `getRelatedBoxes()`, so they can also be highlighted when clicked. See example below.

### 1. HTML
```html
<div class="team_processes">
    Team Processes
    <div class="team_processes_invisible">Team Processes</div>  <!-- invisible box -->
    <div class="transition_processes">Transition Processes</div>
    ...
</div>
```

2. **CSS** - Style the invisible box in `style3.css`:
```css
.team_processes_invisible {
  position: absolute;
  width: 100%;                /* Cover entire parent */
  height: 48%;                /* Match parent height */
  top: 0.5%;
  background-color: #ffcbfb;  /* Match parent color */
}
```

3. **JavaScript** - Define in `boxContents` for the content that corresponds to the entire `Team Processes` box:
```javascript
team_processes_invisible: {
    title: "Team Processes",
    explanation: "Processes involving multiple people working together...",
}
```

4. **Connect to it** - Now other factors can point to `team_processes_invisible` and `Team Processes` can point to other factors:
```javascript
// In getChildBoxes()
case "isolated":
    return ["isolated",                 // self
            "team_processes_invisible", // child
            "transition_processes",     // factor nested in Team Processes
            "action_processes",         // nested factor
            "interpersonal_processes"   // nested factor
    ...];

// In getRelatedBoxes()
case "isolated":
    return ["isolated",                 // self
            "team_processes_invisible", // child
            "transition_processes",     // factor nested in Team Processes
            "action_processes",         // nested factor
            "interpersonal_processes"   // nested factor
    ...];

case "team_processes_invisible":
    return [
        "team_processes_invisible",  // self
        "isolated",                  // parent pointing to it
        "transition_processes",      // factor nested in Team Processes
        "action_processes",          // nested factor
        "interpersonal_processes",   // nested factor
    ];
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| No hover text on factor | Check `factor_name` entry exists in boxContents |
| No hover text after clicking | Missing `factor_name_factor_name` self-reference in boxContents |
| Connection hover doesn't work both ways | Need both `parent_child` and `child_parent` in boxContents |
| No arrows or highlighting (Layer 3) | Must be in both `getChildBoxes()` and `getRelatedBoxes()` |
| Nested factors not highlighting in invisible box | Add all nested factors to `getRelatedBoxes()` for the invisible box |
| Variable name not working | Ensure it exactly matches display name (e.g., `social_composition` = "Social Composition") |
| Zoom not working | Check layer files linked correctly in HTML |
