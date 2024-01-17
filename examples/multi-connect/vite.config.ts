import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://whyindian.ddns.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/chain': {
        // 新增的代理配置
        target: 'https://whyindian.ddns.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/chain/, ''),
      },
    },
  },
});
