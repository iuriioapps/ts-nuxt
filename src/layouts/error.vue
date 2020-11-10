<template>
    <v-app dark>
        <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
        </h1>
        <h1 v-else>
            {{ otherError }}
        </h1>
        <NuxtLink to="/">
            Home page
        </NuxtLink>
    </v-app>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Provide,
    Vue
} from 'nuxt-property-decorator';
import { NuxtError } from '@nuxt/types';

@Component({
    layout: 'empty'
})
export default class extends Vue {
    @Prop()
    error!: NuxtError;

    @Provide()
    pageNotFound = '404 Not Found';

    @Provide()
    otherError = 'An error occurred';

    head(): { title: string } {
        const title =
            this.error.statusCode === 404
                ? this.pageNotFound
                : this.otherError;
        return {
            title
        };
    }
}
</script>

<style scoped>
h1 {
    font-size: 20px;
}
</style>
