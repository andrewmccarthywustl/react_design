import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react_design/",
  define: {
    "process.env": {},
  },
  server: {
    host: "0.0.0.0",
  },
});
