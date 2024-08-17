import { createPopover } from "./popover";
import { createButton } from "./button";
import { createImage } from "./image";

const container = document.createElement("div");

function createContainer() {
  container.id = "container";
  container.classList.add("container");

  return container;
}

function getContainer() {
  return container;
}

const image = createImage("/world-map.svg", "world map");
const button = createButton();
const popover = createPopover();

container.append(button);
container.append(popover);
container.append(image);

export { createContainer, getContainer };
