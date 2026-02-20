const { defineConfig, globalIgnores } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const globals = require("globals");

module.exports = defineConfig([
  globalIgnores(["dist/*"]),
  expoConfig,
  {
    files: [
      "babel.config.js",
      "metro.config.js",
      "tailwind.config.js",
      "postcss.config.js",
    ],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "prettier/prettier": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]);
