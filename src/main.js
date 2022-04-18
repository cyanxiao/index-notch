import getScrollPercentage from "./scroll";
import { getWindowYScroll, getDocHeight, getWindowHeight } from "./scroll";
import addTag from "./addTag";
import { marks } from "./storage";
import anime from "animejs/lib/anime.es.js";

document.documentElement.style.scrollBehavior = "smooth";

/**
 * Detect shortcut to add position mark
 */
document.addEventListener("keydown", function shortcutDetected(event) {
  if (event.ctrlKey && event.key == "b") {
    console.log("shortcut detected");
    addTag(getWindowYScroll(), getWindowHeight(), getDocHeight());
    updateMarksPosition();
  }
});

/**
 * Click button to add position mark
 */
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

/**
 * Refresh all marks position
 */
function updateMarksPosition() {
  for (let mark of marks) {
    let percentage = getScrollPercentage(
      mark["yScroll"],
      mark["windowHeight"],
      getDocHeight()
    );
    anime({
      targets: mark["tag"],
      top: `calc(${percentage}vh - 30px)`,
      easing: "easeInOutQuad",
    });
  }
}
