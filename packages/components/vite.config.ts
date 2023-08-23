import { defineConfig } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  plugins: [react(), typescript()],
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "@nova-design/components",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
    },
  },
});
