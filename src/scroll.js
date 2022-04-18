/**
 * Get current browser viewport height
 */
function getWindowHeight() {
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight ||
    0
  );
}

/**
 * Get current absolute window scroll position
 */
function getWindowYScroll() {
  return (
    window.pageYOffset ||
    document.body.scrollTop ||
    document.documentElement.scrollTop ||
    0
  );
}

/**
 * Get current absolute document height
 */
function getDocHeight() {
  return Math.max(
    document.body.scrollHeight || 0,
    document.documentElement.scrollHeight || 0,
    document.body.offsetHeight || 0,
    document.documentElement.offsetHeight || 0,
    document.body.clientHeight || 0,
    document.documentElement.clientHeight || 0
  );
}

/**
 * Get current vertical scroll percentage
 */
function getScrollPercentage(windowYScroll, windowHeight, docHeight) {
  return ((windowYScroll + windowHeight) / docHeight) * 100;
}

export default getScrollPercentage;
export { getWindowYScroll, getDocHeight, getWindowHeight };
