// need to access container, popover
import { getPopover } from "./popover";
import { getContainer } from "./container";

const button = document.createElement("button");

function createButton() {
  const container = getContainer();
  const popover: HTMLDivElement = getPopover();

  button.classList.add("hotspot-button");
  button.popoverTargetElement = popover;
  button.popoverTargetAction = "show";
  console.dir(button);

  let image = document.createElement("img");
  image.src = "/marker.svg";
  image.alt = "popover marker";
  button.append(image);

  button.addEventListener("click", () => {
    console.log(popover.matches(":popover-open"));
    if (popover.matches(":popover-open")) {
      button.popoverTargetAction = "hide";
      popover.classList.remove("show");
      popover.hidePopover();
    } else {
      button.popoverTargetAction = "show";
      const rect = button.getBoundingClientRect();
      popover.showPopover();
      popover.classList.add("show");
      console.dir(container.clientWidth - button.offsetLeft);
      if (container.clientHeight - button.offsetTop < 100) {
        popover.style.top = `${
          rect.top + window.scrollY - popover.clientHeight
        }px`;
      } else {
        popover.style.top = `${rect.bottom + window.scrollY}px`;
      }
      if (popover.clientWidth - button.offsetLeft < popover.clientWidth) {
        popover.style.left = `${
          rect.right + window.scrollX - popover.clientWidth
        }px`;
      } else {
        popover.style.left = `${rect.left + window.scrollX}px`;
      }
    }
  });

  return button;
}

function getButton() {
  return button;
}

export { createButton, getButton };
