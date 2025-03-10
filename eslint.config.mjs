import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: [
      ".docusaurus/**/*",
      "build/**/*",
      "node_modules/**/*",
      "dist/**/*",
      "postcss.config.js",
      "tailwind.config.js",
    ],
    languageOptions: { 
      globals: {
        ...globals.browser,
        module: "readonly",
        require: "readonly",
        process: "readonly",
      }
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Desactivar reglas específicas para archivos de configuración
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_", 
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_" 
      }],
      "react/jsx-no-comment-textnodes": "warn",
      "react/no-unescaped-entities": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "react/prop-types": "off",
      "react/no-unknown-property": ["error", { 
        "ignore": ["cmdk-input-wrapper"] 
      }],
    },
  },
  {
    files: ["*.config.{js,mjs}", "sidebars.js", "docusaurus.config.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
    },
  },
];