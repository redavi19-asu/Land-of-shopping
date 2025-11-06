import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use a relative base so the built site works when served from GitHub Pages
// Enable the React plugin to use the automatic JSX runtime (no global React)
export default defineConfig({
	base: './',
	plugins: [react()],
})
