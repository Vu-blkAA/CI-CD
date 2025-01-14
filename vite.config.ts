import { defineConfig } from 'vite'
import envCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [envCompatible()]
})
