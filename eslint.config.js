import eslintPluginVue from 'eslint-plugin-vue';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ["dev-dist/*", "dist/*", "node_modules/*", "minify-json.js", ".git/*", ".vscode/*"],
  },
  js.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        'browser': true,
        'node': true,
        'es2021': true,
        'console': 'readonly',
        'window': 'readonly',
        'document': 'readonly',
        'fetch': 'readonly',
        'URL': 'readonly',
        'URLSearchParams': 'readonly',
        'setTimeout': 'readonly',
        'clearTimeout': 'readonly',
        'requestAnimationFrame': 'readonly',
        'AbortController': 'readonly',
        'alert': 'readonly'
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'warn'
    }
  }
];
