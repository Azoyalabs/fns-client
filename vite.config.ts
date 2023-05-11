import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

/// <reference types="vitest" />

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "fns-client",
      fileName: "index",
    },
  },
  plugins: [dts()],
  test: {
    includeSource: ["src/**/*.{js,ts}"],
  },
});
