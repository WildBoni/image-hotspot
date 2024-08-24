export interface Popover extends HTMLDivElement {
  popover: string | null;
  showPopover: () => void;
  hidePopover: () => void;
}
