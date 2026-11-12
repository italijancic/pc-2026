import globals from "globals"
import pluginJs from "@eslint/js"

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "semi": ["error", "never"],
      "no-trailing-spaces": ["error"],
      // La cátedra declara las variables de dato con `let x = 0` ANTES del
      // bucle; esta regla (activa en recommended desde ESLint 10) lo marca
      // como error. Va después de recommended para poder pisarla.
      "no-useless-assignment": "off",
    },
  },
]
