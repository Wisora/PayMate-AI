// jest.config.cjs
module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx|js)$": [
      "ts-jest",
      { useESM: true, tsconfig: "tsconfig.jest.json" },
    ],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"], // only TS files here
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  roots: ["<rootDir>/tests"],

  // whitelist modern ESM packages so Jest transforms them
  transformIgnorePatterns: [
    "node_modules/(?!(react|react-dom|lucide-react|@google/genai|jest-axe)/)",
  ],

  // ignore performance tests so Jest doesn’t try to run k6
  testPathIgnorePatterns: ["/tests/performance/"],
};
