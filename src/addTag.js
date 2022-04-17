function addTag(percentage) {
  const tag = document.createElement("img");
  tag.setAttribute("src", chrome.runtime.getURL("icons/index.png"));
  tag.style.position = "fixed";
  tag.style.top = "50px";
  tag.style.zIndex = 1000;
  document.documentElement.append(tag);
}

export default addTag;
