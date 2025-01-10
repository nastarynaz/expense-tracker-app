import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import { FlatCompat } from "@eslint/eslintrc";

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    ...pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
  },
];

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const nextJsConfig = compat.config({
  extends: ["next"],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
});

export default [...config, ...nextJsConfig];
