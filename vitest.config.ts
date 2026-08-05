import { defineConfig } from 'vitest/config';

/**
 * Phase 1: config présente pour `npm run test`.
 * Phase 2: la couverture cible `lib/finance/**` (code financier critique).
 */
export default defineConfig({
  test: {
    environment: 'node',
    include: ['lib/**/*.test.ts', 'lib/**/__tests__/**/*.test.ts'],
    globals: true,
  },
});
