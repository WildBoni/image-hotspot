import { createButton } from "./button";
import { createPopover } from "./popover";
import { createImage } from "./image";
import "./style.css";

function createContainer() {
  const container = document.createElement("div");
  container.id = "container";
  container.classList.add("container");

  function addButton(
    top: string,
    left: string,
    popoverText: string,
    popoverId: string
  ) {
    let popover = createPopover(popoverText, popoverId);
    container.append(popover);
    let button = createButton(top, left, popover, container);
    container.append(button);
  }

  function addImage(imgURL: string, text: string) {
    let image = createImage(imgURL, text);
    container.append(image);
  }

  function render(parentElement: HTMLElement) {
    parentElement.append(container);
  }

  return {
    addButton,
    render,
    addImage,
  };
}

export { createContainer };
