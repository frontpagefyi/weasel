import { defineConfig, globalIgnores } from 'eslint/config';
import base from '@repo/eslint-config/base';
import react from '@repo/eslint-config/react';
import globals from 'globals';

export default defineConfig(
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    name: 'vaul-eslint/vaul',
    languageOptions: {
      globals: globals.browser,
    },
    extends: [base, react],
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
