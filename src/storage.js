import { getWindowYScroll, getDocHeight } from "./scroll";

function markProperty(yScroll, windowHeight, tag) {
  this.yScroll = yScroll;
  this.windowHeight = windowHeight;
  this.tag = tag;
}

let marks = [];

function saveMark(yScroll, windowHeight, tag) {
  marks.push(new markProperty(yScroll, windowHeight, tag));
  console.log(marks);
}

export { saveMark, marks };
