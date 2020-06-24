module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '.*\\.test\\.tsx$',
  testPathIgnorePatterns: [
    '_Template'
  ],
  moduleNameMapper: {
    '\\.(scss|css|jpg|svg|png)$': '<rootDir>/empty-module.js'
  },
  collectCoverage: true
}
