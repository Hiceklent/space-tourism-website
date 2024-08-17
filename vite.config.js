import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: './postcss.config.js',
  },
  plugins: [
    react(),
    compression({
      // Opciones de configuración del plugin
      verbose: true,
      algorithm: 'gzip', // O 'brotliCompress' para Brotli
      threshold: 10240,  // Tamaño mínimo del archivo para comprimir en bytes
      deleteOriginalAssets: false, // Elimina los archivos no comprimidos si es true
    }),
    visualizer({
      open: true, // Abre automáticamente el reporte en tu navegador
      gzipSize: true, // Muestra el tamaño después de la compresión gzip
      brotliSize: true, // Muestra el tamaño después de la compresión Brotli
      filename: 'bundle-analysis.html', // Nombre del archivo de reporte
    }),
  ],
})
