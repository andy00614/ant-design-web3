import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@levellink/ui',
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'wagmi',
        '@ant-design/web3',
        '@levellink/wallet',
        '@ant-design/web3-wagmi',
      ],
    },
  },
  resolve: { alias: { src: resolve('src/') } },
  plugins: [react(), dts()],
});
