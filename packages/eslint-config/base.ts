import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import turbo from 'eslint-config-turbo/flat';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  turbo,
  importPlugin.flatConfigs.recommended,
  prettier,
  {
    name: 'vaul-monorepo-base',
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
);
