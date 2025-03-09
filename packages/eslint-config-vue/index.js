/* eslint-disable no-undef */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    NodeJS: true,
  },
  plugins: ['vue', 'unused-imports', 'prettier'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/default': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Node.js의 내장 모듈을 가져오는 import 문 ~> import fs from 'fs'
          'external', // 프로젝트의 외부 종속성을 가져오는 import 문 ~> import { ref } from 'vue'
          'internal', // 프로젝트 내부에서 정의한 모듈을 가져오는 import 문 ~> import combineTel from 'src/utils'
          ['parent', 'sibling', 'index'], // 차례대로 ~> import 문에서 부모 디렉토리로부터 가져온 모듈, import 문에서 현재 파일과 동일한 디렉토리에 있는 모듈, 현재 파일과 동일한 디렉토리에 있는 'index.ts'와 같은 인덱스 파일을 모두 포함하는 그룹
          'type', // import 문에서 타입 정의 파일을 포함하는 그룹
          'unknown', // import 문에서 그룹에 명시되지 않은 모듈을 포함하는 그룹
          'object', // import 문에서 JavaScript 객체 또는 모듈을 가져오는 그룹
        ],
        pathGroups: [
          {
            pattern: '{vue*, vue*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
