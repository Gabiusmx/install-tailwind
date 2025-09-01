import { defineConfig } from "vite";


export default defineConfig({
    plugins: [],
    server: {
        port: 3000,
        host: true,
        open: true
    },
    build: {
        outDir: 'dist',
        sourcemap: true
    }
});
