export default {
    target: 'server',
    telemetry: false,
    srcDir: './src',

    head: {
        titleTemplate: 'TS Client',
        title: 'client',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    components: true,

    css: [],
    plugins: [],

    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/vuetify'
    ],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxt/content',
        'nuxt-i18n'
    ],

    i18n: {
        defaultLocale: 'en',
        langDir: 'i18n/',
        locales: [
            { code: 'en', iso: 'en-US', file: 'en/index.ts' },
            { code: 'fr', iso: 'es-ES', file: 'es/index.ts' }
        ],
        lazy: true
    },

    vuetify: {
        optionsPath: '~/plugins/vuetify.options.ts'
    },

    axios: {},
    content: {},
    build: {
        friendlyErrors: false,
        extractCSS: {
            ignoreOrder: true
        },
        hotMiddleware: {
            client: {
                overlay: false
            }
        }
    },

    server: {
        port: 9000,
        host: '0.0.0.0',
        timing: {
            total: true
        }
    }
};
