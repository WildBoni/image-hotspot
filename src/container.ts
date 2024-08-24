import { createButton } from "./button";
import { createPopover } from "./popover";
import { createImage } from "./image";
import { Popover } from "./popover.interface";
import "./style.css";

if (typeof document !== "undefined") {
  const styleElement = document.createElement("link");
  styleElement.rel = "stylesheet";
  styleElement.href = new URL("./style.css", import.meta.url).href;
  document.head.appendChild(styleElement);
}

function createContainer() {
  const container = document.createElement("div");
  container.id = "container";
  container.classList.add("container");

  function addButton(
    top: string,
    left: string,
    popoverId: string,
    popoverText: string
  ) {
    let popover: Popover = createPopover(popoverId, popoverText);
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
