import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // මේ පේළිය අලුතින් දාන්න

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // මේකත් ඇතුළට දාන්න
  ],
  build: {
    cssMinify: 'esbuild'
  }
})