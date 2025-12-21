import { defineConfig, globalIgnores } from 'eslint/config';
import base from './base.ts';
import react from './react.ts';
import next from '@next/eslint-plugin-next';

export default defineConfig(
  base,
  react,
  {
    name: 'vaul-monorepo-next',
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    },
  },
  globalIgnores(
    ['.next/', '.vercel/', 'node_modules/', 'next-env.d.ts'],
    'vaul-monorepo-next-ignores',
  ),
);
