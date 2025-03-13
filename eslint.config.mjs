// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs', 'dist/**'], // dist 폴더 무시
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended, // ✅ Prettier 설정을 그대로 사용
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // ✅ any 타입 허용
      '@typescript-eslint/no-floating-promises': 'warn', // ✅ Promise 처리 누락 경고
      '@typescript-eslint/no-unsafe-argument': 'warn', // ✅ 위험한 인수 경고
      '@typescript-eslint/explicit-function-return-type': 'warn', // ✅ 함수 반환 타입 권장
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // ✅ 사용되지 않는 변수 제한
      '@typescript-eslint/consistent-type-imports': 'warn', // ✅ import 시 타입 일관성 유지
    },
  },
);