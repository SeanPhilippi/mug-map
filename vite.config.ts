import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   watch: {
  //     usePolling: true,
  //   },
  //   host: true,
  //   strictPort: true,
  //   port: 5173,
  // },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
    ],
  },
  // Add build if you are going to use a Git-based (Github or CodeCommit) deployment
  build: {
    outDir: 'build',
  },
});
