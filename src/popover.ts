let popover = document.createElement("div");

function createPopover() {
  popover.id = "myPopover";
  popover.classList.add("popover-content");
  popover.popover = "auto";
  popover.textContent = "This is a popover next to the button!";

  return popover;
}

function getPopover(): HTMLDivElement {
  return popover;
}

export { createPopover, getPopover };
