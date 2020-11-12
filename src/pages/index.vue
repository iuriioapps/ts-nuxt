<template>
    <div>
        <div>{{ $t('app-name') }}</div>
        <v-btn @click="onClick">
            Click me now!
        </v-btn>
        <hr>
        <Simple text="This is a text" />
        <hr>
        <SimpleListBind />
        <hr>
        <SimpleEventBind />
        <hr>
        <SimpleComputedWatch />
        <hr>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import Simple from '@/components/Simple.vue';
    import SimpleListBind from '~/components/SimpleListBind.vue';
    import SimpleEventBind from '~/components/SimpleEventBind.vue';
    import SimpleComputedWatch from '~/components/SimpleComputedWatch.vue';

    @Component({
        components: {
            SimpleComputedWatch,
            SimpleEventBind,
            SimpleListBind,
            Simple
        }
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
