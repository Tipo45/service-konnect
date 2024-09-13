import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// const manifestForPlugin = {
//   registerType: "prompt",
//   includeAssets:
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  VitePWA({ registerType: 'autoUpdate',
    injectRegister: 'auto',
    devOptions: {
      enabled: true,
    },
    manifest: {
      name: 'Service-konnect',
      short_name: 'Serv-kon',
      description: 'connects artisans and clients',
      theme_color: '#1237ae',
      icons: [
        {
          src: "/service-konnect/public/icons/Preview (1).png",
          sizes: '192x192',  
          type: 'image/png',
        },
        {
          src: '/service-konnect/public/icons/Preview (1).png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
   }),
  ],
});
