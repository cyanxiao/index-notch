import getRandomColor from "./color";
import anime from "animejs/lib/anime.es.js";

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
  tag.style.cursor = "pointer";
  document.documentElement.append(tag);
  tag.addEventListener("mouseover", function reaction() {
    anime({
      targets: tag,
      translateX: -40,
    });
  });
  tag.addEventListener("mouseleave", function reaction() {
    anime({
      targets: tag,
      translateX: 0,
    });
  });
}

export default addTag;
