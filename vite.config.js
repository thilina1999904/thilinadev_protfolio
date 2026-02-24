import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // මේ පේළිය අලුතින් දාන්න

export default defineConfig({
  base: '/thilinadev_protfolio/', // මෙතන ඔයාගේ GitHub Repo එකේ නම හරියටම දෙන්න
  plugins: [react(), tailwindcss()],
})