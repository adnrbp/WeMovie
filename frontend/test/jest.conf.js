const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  testMatch: ['<rootDir>/test/unit/**/*.spec.js'],
  moduleFileExtensions: [
    'js'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFiles: ['<rootDir>/test/setup'],
  testURL: 'http://locahost',
  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverageFrom: [
    'src/**/*.{js}',
    '!src/main.js',
    '!**/node_modules/**'
  ]
};