
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
//import obfuscator from "vite-plugin-javascript-obfuscator";


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    /*
     obfuscator({
      options: {
        compact: true,
        controlFlowFlattening: true,
        stringArray: true,
      },
    })*/
  ],
  base: "/abdulkhaliq-partners-website/",
  build: {
    sourcemap: false,
  },

   
});
