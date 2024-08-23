function createPopover(id: string, text: string) {
  let popover = document.createElement("div");
  popover.id = id;
  popover.classList.add("popover-content");
  popover.popover = "auto";
  popover.textContent = text;

  return popover;
}

export { createPopover };
