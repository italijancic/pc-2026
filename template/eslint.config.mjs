import globals from "globals"
import pluginJs from "@eslint/js"

export default [
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "semi": ["error", "never"],
      "no-trailing-spaces": ["error"],
    },
  },
  pluginJs.configs.recommended,
]
