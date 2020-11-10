/* eslint-disable import/named */
import { Context } from '@nuxt/types';
import { Options } from '@nuxtjs/vuetify';

const vuetifyOptions = (ctx: Context): Options => {
    return {
        customVariables: ['~/assets/variables.scss'],
        lang: {
            locales: {},
            current: '',
            t: (key, ...params) => ctx.app.i18n.t(key, params) as string
        }
    };
};

export default vuetifyOptions;
