import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import turbo from 'eslint-config-turbo/flat';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier/flat';
import css from '@eslint/css';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  turbo,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  prettier,
  {
    name: 'vaul-eslint/base',
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
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
  {
    // name: 'vaul-eslint/css',
    language: 'css/css',
    files: ['**/*.css'],
    ...css.configs.recommended,
    plugins: {
      css: css,
    },
    rules: {
      'css/use-baseline': ['error', { baseline: 'widely' }],
    },
  },
  globalIgnores(
    ['.vercel/', '.turbo/', 'node_modules/'],
    'vaul-eslint/base/ignores',
  ),
);
