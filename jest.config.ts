module.exports = require("next/jest")({ dir: "." })({
  // automock: false,

  // bail: 1,

  cacheDirectory: "<rootDir>/tests/.cache",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/tests/**",
    "!**/coverage/**",
    "!**/.next/**",
    "!**/jest_dx/**",
  ],
  coverageDirectory: "<rootDir>/tests/coverage",
  coverageReporters: ["json", "text", "lcov", "clover"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 15,
      functions: 100,
      lines: 80,
    },
  },

  errorOnDeprecated: true,

  moduleDirectories: ["node_modules", "__dirname"],
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
  roots: ["<rootDir>/app/"],
  // runner: "jest-runner",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // testTimeout: 100,
  testEnvironment: "jest-environment-jsdom",
  testLocationInResults: true,
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: [
    "/.next/",
    "/build/",
    "/node_modules/",
    "<rootDir>/tests/",
    "/coverage/",
  ],
  // transform: { "^.+\\.tsx?$": "ts-jest" },

  // unmockedModulePathPatterns: [
  //   "<rootDir>/node_modules/react",
  //   "<rootDir>/node_modules/react-dom",
  // ],

  verbose: true,

  // watchPathIgnorePatterns: ["<rootDir>/node_modules/"],
  // watchman: true,
});

export {};
