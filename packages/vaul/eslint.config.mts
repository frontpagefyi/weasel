import { defineConfig, globalIgnores } from 'eslint/config';
import base from '@repo/eslint-config/base';
import react from '@repo/eslint-config/next';

export default defineConfig(
  base,
  react,
  globalIgnores(['dist'], 'test-app-ignores'),
);
