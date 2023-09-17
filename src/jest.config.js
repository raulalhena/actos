const nextJest = require('next/jest');

const createJestConfig = nextJest({
// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    setupFiles: ['./jest.setup.js'],
    setupFilesAfterEnv: [ '<rootDir>/jest.setup.js', '@testing-library/jest-dom/extend-expect.js', '<rootDir>/support/setupTests.js' ],
    testEnvironment: 'jsdom',
    preset: ['next/babel', 'ts-jest'],
    verbose: true,
    transform: {
        '^.+\\.css$': 'jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)': '<rootDir>/src/$1',
        '\\.css$': 'identity-obj-proxy',
    }
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);