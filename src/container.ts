import popover from "./popover";
import button from "./button";
import image from "./image";

const container = document.createElement('div');
container.id = 'container';
container.classList.add('container');

container.append(button);
container.append(popover);
container.append(image);

export default container;