import { defineConfig, globalIgnores } from 'eslint/config';
import base from '@repo/eslint-config/base';
import react from '@repo/eslint-config/react';
import globals from 'globals';

export default defineConfig(
  base,
  react,
  {
    name: 'weasel-eslint/weasel',
    languageOptions: {
      globals: globals.browser,
    },
  },
  globalIgnores(
    [
      'dist',
      // Only want to lint the src/style.css file
      './style.css',
    ],
    'vaul/ignores',
  ),
);
