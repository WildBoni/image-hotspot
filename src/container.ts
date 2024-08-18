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
const button = createButton("20%", "50%", "pop1", "test 1");
const button2 = createButton("40%", "80%", "pop2", "test 2");

container.append(button);
container.append(button2);
container.append(image);

export { createContainer, getContainer };
