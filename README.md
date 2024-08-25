### Under construction... PRs are welcome!

# Image Hotspot

This small library is perfect for handling popovers.
It uses the latest popover API

## How to use it

- Create a new container:
  - let container = createContainer();
- Add a background image:
  - container.addImage("/world-map.svg", "world map");
- Add as many popovers as you like: for each popover you can specify the x and y coords of the button and the id and text of the popover:
  - container.addButton("20%", "50%", "pop1", "test 1");
  - container.addButton("40%", "30%", "pop2", "test 2");
- Render the container inside your DOM:
  - container.render(document.querySelector("#app"));
- CSS is not perfectly bundled inside JS: you should import it manually in your project, eg:

```html
<link
  rel="stylesheet"
  href="./node_modules/easy-image-hotspot/dist/style.css"
/>
```

## WARNING: this library is still unstable!
