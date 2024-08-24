import { Popover } from "./popover.interface";

function createPopover(id: string, text: string): Popover {
  let popover = document.createElement("div") as Popover;
  popover.id = id;
  popover.classList.add("popover-content");
  popover.popover = "auto";
  popover.textContent = text;

  return popover;
}

export { createPopover };
