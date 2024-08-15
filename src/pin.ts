export function createPin(element: HTMLElement, x: number, y:number) {
  let pin: HTMLDivElement = document.createElement("div");
  pin.classList.add('pin');
  pin.textContent = 'New';
  pin.style.right = `${x}%`;
  pin.style.top = `${y}%`;
  element.append(pin);
}
