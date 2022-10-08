import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined'
  },
  plugins: [preact(), tsconfigPaths()],
  // https://www.rockyourcode.com/setting-up-a-modern-preact-application-with-typescript-vite-and-vitest/
  // @ts-ignore
  test: {
    environment: 'happy-dom',
    include: ['./src/**/test.{ts,tsx}'],
    setupFiles: ['./src/test-setup.ts'],
    includeSource: ['./src/**/*.{ts,tsx}'],
    coverage: {
      reporter: ['text-summary', 'text']
    },
    mockReset: true,
    restoreMocks: true
  }
});
