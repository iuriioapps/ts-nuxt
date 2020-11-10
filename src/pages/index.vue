<template>
    <div>
        <div>{{ $t('app-name') }}</div>
        <v-btn @click="onClick">
            Click me now!
        </v-btn>
        <Simple />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Simple from '../components/Simple.vue';

@Component({
    components: { Simple }
})
export default class index extends Vue {
    onClick(): void {
        // eslint-disable-next-line
        console.log('Clicked');

        this.$nuxt.error({
            message: 'Some error',
            statusCode: 404
        });
    }
}
</script>
