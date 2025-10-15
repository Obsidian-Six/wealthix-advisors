// Jest config for Next.js 15 with TypeScript
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
  collectCoverageFrom: ["app/**/*.{ts,tsx}", "!app/**/_*.{ts,tsx}"],
};

export default createJestConfig(customJestConfig);
