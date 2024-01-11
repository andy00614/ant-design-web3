import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@levellink/wallet',
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  resolve: { alias: { src: resolve('src/') } },
  plugins: [
    react(),
    dts({
      exclude: ['./stories/**/*', '**/*.stories.{tsx,ts}'],
    }),
  ],
});
