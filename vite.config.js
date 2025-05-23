/**
 * COPYRIGHT © 2022 KIOS ONLY, A.S. ALL RIGHTS RESERVED.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Gamo a.s. commercial licence which accompanies this distribution,
 * and is available on demand.
 */

import vue from '@vitejs/plugin-vue';
import { createRequire } from 'node:module';
import { defineConfig } from 'vite';

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig((cfg) => {
  console.log(cfg);
  return {
    build: {
      cssMinify: cfg.mode === 'prod',
      minify: cfg.mode === 'prod',
      sourcemap: cfg.mode !== 'prod',
    },
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': '/modules'
      }
    }
  };
});
