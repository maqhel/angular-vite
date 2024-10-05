import { defineConfig } from 'vite'
import { angular } from '@nitedani/vite-plugin-angular/plugin'
// import { angular } from '@nitedani/vite-plugin-angular/plugin'

export default defineConfig({
  plugins: [angular()],
  server: {
    port: 4200
  }
})
