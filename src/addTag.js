import getRandomColor from "./color";

function addTag(percentage) {
  const tag = document.createElement("div");
  tag.style.width = "80px";
  tag.style.height = "30px";
  tag.style.position = "fixed";
  tag.style.backgroundColor = `${getRandomColor()}`;
  tag.style.borderRadius = "22px 0px 0px 22px";
  tag.style.right = "-50px";
  tag.style.top = `${percentage}vh`;
  tag.style.zIndex = 1000;
  document.documentElement.append(tag);
}

export default addTag;
