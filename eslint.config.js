import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript"
  ),
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "coverage/**",
      "node_modules/**"
    ]
  },
  {
    rules: {
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"]
        }
      ],
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "arrow-body-style": ["error", "as-needed"],
      "prefer-template": "error",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"]
    }
  }
]