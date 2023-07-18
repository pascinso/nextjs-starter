import nextJest from "next/jest";

const customJestConfig = {
  // automock: false,

  // bail: 1,

  cacheDirectory: "<rootDir>/tests/.cache",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/.next/**",
    "!**/build/**",
    "!**/dist/**",
    "!**/node_modules/**",
    "!**/tests/**",
  ],
  coverageDirectory: "<rootDir>/tests/coverage",
  coverageReporters: ["json", "text", "lcov", "clover"],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },

  errorOnDeprecated: true,

  moduleDirectories: ["node_modules", "<rootDir>"],
  // moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  // moduleNameMapper: {
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
  //     "<rootDir>/tests/mocks.js",
  //   "\\.(css|less|scss)$": "<rootDir>/tests/mocks.js",
  // },

  notify: true,
  notifyMode: "always",

  resetMocks: true,
  restoreMocks: true,
  roots: ["<rootDir>/app", "<rootDir>/components"],
  // runner: "jest-runner",

  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // testTimeout: 100,
  testEnvironment: "jest-environment-jsdom",
  testLocationInResults: true,
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: [
    "<rootDir>/.next",
    "<rootDir>/build",
    "<rootDir>/dist",
    "<rootDir>/node_modules",
    "<rootDir>/tests",
  ],
  // transform: {
  //   "^.+\\.jsx?$": "babel-jest",
  // },

  // unmockedModulePathPatterns: [
  //   "<rootDir>/node_modules/react",
  //   "<rootDir>/node_modules/react-dom",
  // ],

  verbose: true,

  // watchPathIgnorePatterns: ["<rootDir>/node_modules/"],
  // watchman: true,
};

export default nextJest({ dir: "." })(customJestConfig);
