/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@rocketseat/eslint-config/react", "turbo"],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error"
  }
};
