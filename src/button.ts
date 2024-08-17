// need to access container, popover
import popover from "./popover";


const button = document.createElement('button');
button.classList.add('hotspot-button');
button.popoverTargetElement= popover;
button.popoverTargetAction="show";
console.dir(button)

let image = document.createElement('img');
image.src = "/marker.svg";
image.alt = 'popover marker';
button.append(image);

button.addEventListener('click', () => {
  console.log(popover.matches(':popover-open'))
  if (popover.matches(':popover-open')) {
    button.popoverTargetAction="hide"
    popover.classList.remove('show');
    popover.hidePopover();
  } else {
    button.popoverTargetAction="show"
    const rect = button.getBoundingClientRect();
    popover.showPopover();
    popover.classList.add('show')
    console.dir(document.querySelector('.container').clientWidth - button.offsetLeft)
    if(document.querySelector('.container').clientHeight - button.offsetTop < 100) {
      popover.style.top = `${rect.top + window.scrollY - document.querySelector('#myPopover').clientHeight}px`;
    } else {
      popover.style.top = `${rect.bottom + window.scrollY}px`;
    }
    if(document.querySelector('.container').clientWidth - button.offsetLeft < popover.clientWidth) {
      popover.style.left = `${rect.right + window.scrollX - document.querySelector('#myPopover').clientWidth}px`;
    } else {
      popover.style.left = `${rect.left + window.scrollX}px`;
    }
  }
});

export default button;