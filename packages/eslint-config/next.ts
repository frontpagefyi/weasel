import { defineConfig, globalIgnores } from 'eslint/config';
import base from './base.ts';
import react from './react.ts';
import next from '@next/eslint-plugin-next';

export default defineConfig(
  base,
  react,
  {
    name: 'vaul-eslint/next',
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    },
  },
  globalIgnores(['.next/', 'next-env.d.ts'], 'vaul-eslint/next/ignores'),
);
