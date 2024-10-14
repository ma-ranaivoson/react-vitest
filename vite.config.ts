import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.ts',
    coverage: {
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/models/**/*.{ts,tsx}',
        'src/main.tsx',
        'src/**/*.{types,stories,constants,test,spec,d}.{ts,tsx}',
      ],
    },
  }
})
