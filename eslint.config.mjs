import typescriptEslint from '@typescript-eslint/eslint-plugin'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import js from '@eslint/js'
import {FlatCompat} from '@eslint/eslintrc'
import importPlugin from 'eslint-plugin-import'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    ...compat.extends(
        'plugin:@typescript-eslint/recommended',
        'plugin:@next/next/recommended'),
    {
        plugins: {
            '@typescript-eslint': typescriptEslint,
            'import': importPlugin,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            quotes: ['error', 'single'],
            semi: ['error', 'never'],
            indent: ['error', 4],
            'import/extensions': ['error', 'never'],
        },
    },
    {
        ignores: ['.next'],
    }
]
