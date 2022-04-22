import getRandomColor from "./color";
import anime from "animejs/lib/anime.es.js";
import getScrollPercentage from "./scroll";
import { saveMark, marks } from "./storage";

function addTag(windowYScroll, windowHeight, docHeight) {
  let tag = document.createElement("div");
  let percentage = getScrollPercentage(windowYScroll, windowHeight, docHeight);
  tag.style.width = "80px";
  tag.style.height = "30px";
  tag.style.position = "fixed";
  tag.style.backgroundColor = `${getRandomColor()}`;
  tag.style.borderRadius = "0px 22px 22px 0px";
  tag.style.left = "-50px";
  tag.style.top = `calc(${percentage}vh - 30px)`;
  tag.style.zIndex = 1000;
  tag.style.cursor = "pointer";
  document.documentElement.append(tag);
  tag.addEventListener("mouseover", function reaction() {
    anime({
      targets: tag,
      translateX: 40,
    });
  });
  tag.addEventListener("mouseleave", function reaction() {
    anime({
      targets: tag,
      translateX: 0,
    });
  });
  tag.addEventListener("click", function scroll() {
    window.scrollTo({
      top: windowYScroll,
      behavior: "smooth",
    });
  });
  tag.addEventListener("contextmenu", function rightClick(event) {
    event.preventDefault();
    tag.remove();
  });
  saveMark(windowYScroll, windowHeight, tag);
}

export default addTag;
