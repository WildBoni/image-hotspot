import './style.css'
import { createPin } from './pin'

let container: HTMLDivElement = document.createElement('div');

document.querySelector<HTMLDivElement>('#app')!.append(container);

let image = document.createElement('img');
image.src="public/world-map.svg";
container.append(image)

createPin(container, 10,20);

