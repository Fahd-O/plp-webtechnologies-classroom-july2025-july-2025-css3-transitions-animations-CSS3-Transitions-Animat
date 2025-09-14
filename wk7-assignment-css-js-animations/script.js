/* -------------------------
   Week 7 — script.js
   Parts:
   - Part 2: functions (parameters, return, scope)
   - Part 3: trigger CSS animations by adding/removing classes
   Comments label which assignment part each section serves.
   ------------------------- */

/* ---------------- Part 2: Functions with parameters, return, scope ---------------- */

// Global variable (demonstrates global scope)
let animationCount = 0;

// Function 1: simple addNumbers (parameters + return)
function addNumbers(a, b) {
  return a + b;
}

// Function 2: changeBackground(element, color)
// - Changes the element's background color
// - Returns the previous color (demonstrates a meaningful return)
function changeBackground(element, color) {
  if (!element) return null;
  const prev =
    element.style.backgroundColor ||
    window.getComputedStyle(element).backgroundColor;
  element.style.backgroundColor = color;
  return prev;
}

// Function 3: setBoxSize(element, widthPx, heightPx)
// - Sets width/height (in pixels)
// - Returns an object with the new size (demonstrates return of structured data)
function setBoxSize(element, widthPx, heightPx) {
  if (!element) return null;
  // local variable — demonstrates local scope
  const newSize = { width: `${widthPx}px`, height: `${heightPx}px` };
  element.style.width = newSize.width;
  element.style.height = newSize.height;
  return newSize;
}

/* ----------------- Hook up Part 2 UI ----------------- */
const funcBox = document.getElementById("funcBox");
const funcOutput = document.getElementById("funcOutput");
const colorBtn = document.getElementById("colorBtn");
const growBtn = document.getElementById("growBtn");
const resetFuncBtn = document.getElementById("resetFuncBtn");

let colorIndex = 0;
const colorPalette = ["#ecfeff", "#fde68a", "#bbf7d0", "#f9a8d4", "#dbeafe"];

function logFunc(msg) {
  // prepend timestamp
  const time = new Date().toLocaleTimeString();
  funcOutput.textContent = `[${time}] ${msg}\n` + funcOutput.textContent;
}

// Change background each click and show the returned previous color
colorBtn.addEventListener("click", () => {
  const nextColor = colorPalette[colorIndex % colorPalette.length];
  const prev = changeBackground(funcBox, nextColor);
  logFunc(`changeBackground -> prevColor: ${prev} | newColor: ${nextColor}`);
  colorIndex++;
});

// Increase size stepwise and show the returned new size object
let currentSize = { w: 180, h: 60 }; // px
growBtn.addEventListener("click", () => {
  currentSize.w += 30;
  currentSize.h += 12;
  const newSize = setBoxSize(funcBox, currentSize.w, currentSize.h);
  logFunc(`setBoxSize -> newSize: ${JSON.stringify(newSize)}`);
});

// Reset the box to original values
resetFuncBtn.addEventListener("click", () => {
  funcBox.style.backgroundColor = "";
  const reset = setBoxSize(funcBox, 220, 60);
  logFunc(`reset -> size set to ${JSON.stringify(reset)}`);
  colorIndex = 0;
});

/* Small demo button to show addNumbers usage and return value */
const sumBtn = document.getElementById("sumBtn");
const sumOut = document.getElementById("sumOut");
sumBtn.addEventListener("click", () => {
  const result = addNumbers(5, 7);
  sumOut.textContent = `addNumbers(5, 7) returned: ${result}`;
});

/* ---------------- Part 3: Triggering CSS animations with JS (add/remove class) ---------------- */

const jsBox = document.getElementById("jsBox");
const animateBtn = document.getElementById("animateBtn");
const resetBtn = document.getElementById("resetBtn");

function triggerAnimation(element, animationClass) {
  if (!element) return;
  // If already running, restart the animation by removing and re-adding
  element.classList.remove(animationClass);
  // Force reflow to allow re-trigger (reading offsetWidth)
  void element.offsetWidth;
  element.classList.add(animationClass);

  animationCount++;
  console.log(`triggerAnimation called. Count: ${animationCount}`);
  return animationCount; // return value demonstrates usefulness
}

function resetAnimation(element, animationClass) {
  if (!element) return false;
  element.classList.remove(animationClass);
  return true;
}

animateBtn.addEventListener("click", () => {
  const countAfter = triggerAnimation(jsBox, "move");
  // show quick log in the console and also in Part 2 log area for visibility
  logFunc(`triggerAnimation -> returned count: ${countAfter}`);
});

resetBtn.addEventListener("click", () => {
  const ok = resetAnimation(jsBox, "move");
  logFunc(`resetAnimation -> returned: ${ok}`);
});

/* ---------------- End of script.js ---------------- */
