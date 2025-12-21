import { defineConfig } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import { version as reactVersion } from 'react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig(
  reactHooks.configs.flat['recommended-latest'],
  // @ts-expect-error -- eslint-plugin-react won't update to support defineConfig: https://github.com/jsx-eslint/eslint-plugin-react/issues/3956
  react.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    name: 'vaul-monorepo-react',
    settings: {
      react: {
        version: reactVersion,
      },
    },
    rules: {
      // Turn off the rule requiring React to be in scope for JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
      'react/react-in-jsx-scope': 'off',

      // Turn off prop-types as we use TypeScript for type checking
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
      'react/prop-types': 'off',

      // Disallow using array index as a key prop value
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
      'react/no-array-index-key': 'error',

      // Enforce exhaustive dependencies for React Hooks
      // https://react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-deps
      'react-hooks/exhaustive-deps': 'error',
    },
  },
);
