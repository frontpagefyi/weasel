import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import turbo from 'eslint-config-turbo/flat';
import { importX } from 'eslint-plugin-import-x';
import prettier from 'eslint-config-prettier/flat';
import css from '@eslint/css';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { createNodeResolver } from 'eslint-plugin-import-x';
import { tailwind3 } from 'tailwind-csstree';

export default defineConfig(
  {
    name: 'vaul-eslint/base',
  },
  globalIgnores(
    ['.vercel/', '.turbo/', 'node_modules/'],
    'vaul-eslint/base/ignores',
  ),
  turbo,
  {
    name: 'vaul-eslint/base/typescript',
    files: ['**/*.{js,jsx,ts,tsx,mjs,mts}'],
    plugins: {
      // @ts-expect-error -- types are incorrect but it stills works
      'import-x': importX,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      'import-x/flat/recommended',
      'import-x/flat/typescript',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver(),
        createNodeResolver(),
      ],
      'import-x/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.mts'],
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.mts'],
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
    name: 'vaul-eslint/base/css',
    language: 'css/css',
    languageOptions: {
      customSyntax: tailwind3,
    },
    files: ['**/*.css'],
    plugins: {
      css: css,
    },
    extends: [css.configs.recommended],
    rules: {
      'css/use-baseline': ['error'],
    },
  },
  prettier,
);
