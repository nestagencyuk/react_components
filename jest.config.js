module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '.*\\.test\\.(ts|tsx)$',
  testPathIgnorePatterns: ['_Template'],
  moduleNameMapper: {
    '\\.(scss|css|jpg|svg|png)$': '<rootDir>/empty-module.js'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.tsx', '!src/components/_Template']
}
