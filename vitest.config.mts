import path from 'path';
import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';

const resolve = (src: string) => {
  return path.resolve(__dirname, src);
};

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        exportType: 'default',
      },
      include: ['**/*.svg'],
    }),
  ],
  resolve: {
    alias: {
      '@levellink/web3': resolve('./packages/web3/src/index'),
      '@levellink/web3-icons': resolve('./packages/icons/src/index'),
      '@levellink/web3-assets': resolve('./packages/assets/src/index'),
      '@levellink/web3-wagmi': resolve('./packages/wagmi/src/index'),
      '@levellink/web3-common': resolve('./packages/common/src/index'),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['./packages/**/*.test.{ts,tsx}'],
    setupFiles: ['./tests/setup.ts'],
    reporters: ['default'],
    coverage: {
      include: ['packages/*/src/**/*.{tx,tsx}'],
      exclude: ['**/demos/*.tsx'],
      reporter: ['json-summary', ['text', { skipFull: true }], 'cobertura', 'html'],
    },
    testTimeout: 3e4,
  },
});
