

window.innerHeight is a JavaScript property that returns the height of the browser's viewport in pixels, including the visible content area and any visible scrollbars.

It’s commonly used in responsive design or when dealing with dynamic layouts to adjust elements based on the current height of the browser window.
When combined with event listeners like resize, you can trigger adjustments when the window size changes.
```js
window.addEventListener("resize", () => {
  console.log("New window height: ", window.innerHeight);
  // Adjust some element height dynamically
  document.getElementById('someElement').style.height = `${window.innerHeight}px`;
});
```

window.top is a JavaScript property that refers to the topmost `window` or frame in a window hierarchy
