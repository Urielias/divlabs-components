import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
          entry: 'src/index.ts', // Adjust this to your entry point
          name: 'divlabs-components', // Replace with your library name
        },
        rollupOptions: {
          // Externalize dependencies, if needed
          external: ['vue'], // Example for Vue.js
          output: {
            // Specify the formats you want to build (e.g., esm, cjs, and umd)
            format: "cjs",
            // Output file names (adjust as needed)
            // You can omit the .html file here
            assetFileNames: '[name][extname]',
          },
        },
      },
});
