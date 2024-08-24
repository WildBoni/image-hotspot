import markerUrl from "./marker.svg?url";
import { Popover } from "./popover.interface";

interface ButtonWithPopover extends HTMLButtonElement {
  popoverTargetAction: string;
  popoverTargetElement: Element | null;
}

function createButton(
  top: string,
  left: string,
  popover: Popover,
  container: HTMLDivElement
) {
  const button = document.createElement("button") as ButtonWithPopover;

  button.classList.add("hotspot-button");
  button.style.top = top;
  button.style.left = left;
  button.popoverTargetElement = popover;
  button.popoverTargetAction = "show";

  let image = document.createElement("img");
  image.src = markerUrl;
  image.alt = "popover marker";
  button.append(image);

  button.addEventListener("click", () => {
    if (popover.matches(":popover-open")) {
      button.popoverTargetAction = "hide";
      popover.classList.remove("show");
      popover.hidePopover();
    } else {
      button.popoverTargetAction = "show";
      const rect = button.getBoundingClientRect();
      popover.showPopover();
      popover.classList.add("show");

      // if (container.clientHeight - button.offsetTop < 100) {
      //   popover.style.top = `${
      //     rect.top + window.scrollY - popover.clientHeight
      //   }px`;
      // } else {
      popover.style.top = `${rect.bottom + window.scrollY}px`;
      // }
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

export { createButton };
