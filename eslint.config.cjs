// eslint.config.cjs

const globals = require("globals");

module.exports = [
  // Global ignores
  {
    ignores: ["node_modules/**"],
  },

  // JS files ke liye config
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        // Node.js environment globals (require, module, process, etc.)
        ...globals.node,
        // Jest test environment globals (describe, it, expect, etc.)
        ...globals.jest,
      },
    },
    rules: {
      // Basic rules
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
];
