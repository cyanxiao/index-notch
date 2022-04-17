import getScrollPercentage from "./scroll";
import addTag from "./addTag";

document.documentElement.style.scrollBehavior = "smooth";

/**
 * Detect shortcut to add position mark
 */
document.addEventListener("keydown", function shortcutDetected(event) {
  if (event.ctrlKey && event.key == "b") {
    console.log("shortcut detected");
    console.log(getScrollPercentage());
    addTag(getScrollPercentage());
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.mark === "current") {
    console.log("button click detected");
    console.log(getScrollPercentage());
    addTag(getScrollPercentage());
    sendResponse({ isAdd: "true" });
  }
});
