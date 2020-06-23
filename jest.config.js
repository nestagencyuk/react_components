module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '.*\\.test\\.tsx$',
  moduleNameMapper: {
    '\\.(scss|css|jpg|svg|png)$': '<rootDir>/empty-module.js'
  },
  collectCoverage: true
}
