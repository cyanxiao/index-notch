import { getWindowYScroll, getDocHeight } from "./scroll";

function markProperty(serialNumber, yScroll, tag) {
  this.serialNumber = serialNumber;
  this.yScroll = yScroll;
  this.tag = tag;
}

export { markProperty };
