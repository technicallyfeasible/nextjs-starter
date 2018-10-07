const tsJestPresets = require('ts-jest/presets');

module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx'
  ],
  moduleDirectories: [
    'node_modules',
  ],
  testRegex: '/(test|src|pages)/.*(test|spec)\\.(js|tsx?)$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/coverage/',
  ],
  transform: {
    ...tsJestPresets.defaults.transform,
    '^.+\\.js$': 'babel-jest',
    '\\.scss$': '<rootDir>/test/transforms/scss.js'
  },
  setupFiles: [
    '<rootDir>/src/testSetup.ts'
  ],
  testEnvironment: 'jsdom-global',
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
        esModuleInterop: true
      },
      babelConfig: false,
    }
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '(pages|src)/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ]
};
