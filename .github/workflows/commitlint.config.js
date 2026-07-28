// PayMate AI – Commitlint Configuration
// Enforces conventional commit standards for clarity and automation.

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New features
        "fix", // Bug fixes
        "docs", // Documentation changes
        "style", // Formatting/style updates
        "refactor", // Code restructuring
        "test", // Adding/updating tests
        "chore", // Maintenance tasks
      ],
    ],
    "subject-case": [2, "always", ["sentence-case"]],
    "header-max-length": [2, "always", 72],
    "scope-case": [2, "always", ["lower-case"]],
  },
};
