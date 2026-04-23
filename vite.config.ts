import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { promises as fs } from 'fs'
import { resolve } from 'path'

const redirectPlugin = () => ({
  name: 'redirect-plugin',
  closeBundle() {
    fs.writeFile(resolve(__dirname, 'dist/_redirects'), '/* /snowbusters-portal/index.html 200')
  },
})

export default defineConfig({
  plugins: [react(), redirectPlugin()],
  base: '/snowbusters-portal/',
})