<template>
    <div class="simple">
        {{ text }}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'nuxt-property-decorator';

    @Component
    export default class Simple extends Vue {
        @Prop({ type: String, required: false })
        text! = 'Simple component'
    }
</script>

<style lang="scss">
    $color: red;

    .simple {
        color: $color;
    }
</style>
