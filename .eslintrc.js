module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    rules: {
        'semi': ['error', 'always'],
        'indent': ['error', 4],
        'quote-props': ['error', 'consistent-as-needed'],
        'multiline-ternary': ['off', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'vue/html-indent': ['error', 4],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': ['error']
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ]
};
