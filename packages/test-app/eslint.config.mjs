import { defineConfig, globalIgnores } from 'eslint/config';
import next from '@repo/eslint-config/next';

export default defineConfig(
  next,
  globalIgnores(['playwright-report/', 'test-results/'], 'test-app/ignores'),
);
