module.exports = {
    modulePaths: ['src'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^~/(.*)$': '<rootDir>/src/$1',
        '^vue$': 'vue/dist/vue.common.js'
    },
    moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.vue',
        '<rootDir>/src/**/*.js',
        '<rootDir>/src/**/*.ts'
    ]
};
