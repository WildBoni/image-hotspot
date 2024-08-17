import { createContainer } from "./container";

let container = createContainer();
let app = document.querySelector("#app");
app && app.append(container);
