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
        'quote-props': ['error', 'consistent'],
        'multiline-ternary': ['off', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'no-useless-constructor': 'off',
        'no-extra-semi': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/no-extra-semi': ['error'],
        '@typescript-eslint/no-inferrable-types': ['off', 'always'],
        'vue/html-indent': ['error', 4],
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'always'
        }]
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
