import { createContainer } from "./container";

let container = createContainer();

container.addImage("/world-map.svg", "world map");
container.addButton("20%", "50%", "pop1", "test 1");
container.addButton("40%", "80%", "pop2", "test 2");
let app: HTMLElement | null = document.querySelector("#app");
app && container.render(app);
