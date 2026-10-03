import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'admin-cms-server',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/admin') {
            res.writeHead(302, { Location: '/admin/' })
            res.end()
            return
          }
          if (req.url === '/admin/index.html') {
            res.writeHead(302, { Location: '/admin/' })
            res.end()
            return
          }
          if (req.url === '/admin/config.yml' || req.url === '/config.yml') {
            const configPath = path.resolve(__dirname, 'public/config.yml')
            if (fs.existsSync(configPath)) {
              res.setHeader('Content-Type', 'text/yaml; charset=utf-8')
              res.end(fs.readFileSync(configPath, 'utf-8'))
              return
            }
          }
          next()
        })
      },
    },
  ],
})
