/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  setupFilesAfterEnv: ['expect-puppeteer'],
  preset: './config/jest-preset.cjs',
  testTimeout: 30000,
};