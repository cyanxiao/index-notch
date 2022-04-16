document.addEventListener("keydown", function shortcutDetected(event) {
  if (event.ctrlKey && event.key == "b") {
    console.log("shortcut detected");
  }
});
