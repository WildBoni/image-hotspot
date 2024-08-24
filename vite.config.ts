// vite.config.ts

import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "imageHospot",
      fileName: (format) => `image-hotspot.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  plugins: [dts()],
});
