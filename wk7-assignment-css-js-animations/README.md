# Week 7 — CSS Animations & JavaScript Functions

## Project summary

This small project demonstrates how to combine CSS3 transitions & keyframe animations with JavaScript functions that show parameters, return values, and scope. JavaScript is also used to trigger CSS animations dynamically. The project is split into three clearly labeled parts.

## Files

- `index.html` — main page (three visually distinct panels: Part 1, Part 2, Part 3)
- `styles.css` — all styles, transitions, and keyframe animations
- `script.js` — all JavaScript, divided into commented sections for Part 2 and Part 3
- `README.md` — this file

## How to run

1. Clone / place the folder on your computer.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).
3. No build tools or server required — static files only.

## What you will find

### Part 1 — CSS Transitions & Animations (CSS-only)

- Hover the **Hover Me** button: it uses `transition` (background & transform).
- Observe the **Continuous Animation** box: it uses `@keyframes` (`pulse`) and runs without JS.

### Part 2 — JavaScript Functions (scope, parameters, return)

- Functions implemented in `script.js`:
  - `addNumbers(a, b)` → returns sum (example shown via UI button).
  - `changeBackground(element, color)` → sets background, returns previous color.
  - `setBoxSize(element, widthPx, heightPx)` → sets size, returns `{ width, height }`.
- Scope demonstration:
  - `animationCount` (global) vs. `newSize` and other local variables inside functions (local scope).
- UI controls:
  - **Change Background** button: cycles background colors and logs previous color.
  - **Increase Size** button: increases the box size and logs returned size object.
  - **Reset Box** button: resets values and logs action.
- Visible logs are shown in the `Returns / Logs` panel for quick verification.

### Part 3 — Triggering CSS Animations with JS

- `triggerAnimation(element, animationClass)` — removes and re-adds class to restart animation; returns updated animation count.
- `resetAnimation(element, animationClass)` — removes the animation class; returns boolean success.
- Use **Animate the Box** and **Reset** buttons to verify behavior (class toggling triggers the `move` keyframes animation).

## Testing steps (quick)

1. Open `index.html`.
2. Part 1: hover the button; watch the continuous pulse box.
3. Part 2:
   - Click **Change Background** (see color change & previous color logged).
   - Click **Increase Size** (box grows; returned size logged).
   - Click **Compute 5 + 7** (result displayed).
4. Part 3:
   - Click **Animate the Box** (box moves and rotates).
   - Click **Reset** (animation removed).
5. Check browser console for additional logs (optional).

## Notes

- All JavaScript sections are commented and clearly labeled with the assignment part they implement.
- Functions include parameters and return values; two functions (`changeBackground`, `setBoxSize`) directly modify CSS and return meaningful values to demonstrate reuse and outputs.
- The three parts are visually separated with distinct panel colors and badges so one can instantly identify each requirement.
- No external libraries are used.

## Compatibility

Works in modern browsers (Chrome, Edge, Firefox, Safari). No Node / build steps required.
