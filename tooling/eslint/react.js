/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    require.resolve("@vercel/style-guide/eslint/react"),
  ],
  rules: {
    "react/prop-types": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-return-await": "off",
    "import/no-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": "off",
    "import/no-named-as-default": "off",
  },
  globals: {
    React: "writable",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
  },
};

module.exports = config;
