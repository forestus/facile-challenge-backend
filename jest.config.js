module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/**/**/**/**/*.ts'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest.setup.js'],
  verbose: true,
  moduleNameMapper: {
    '@modules/(.*)': '<rootDir>/src/modules/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@docs/(.*)': '<rootDir>/docs/$1',
  },
  coverageProvider: 'v8',
  modulePathIgnorePatterns: ['<rootDir>/src/shared/infra/http/server.spec.ts'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
