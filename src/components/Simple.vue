<template>
    <div class="simple">
        Simple component
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';

    @Component
    export default class Simple extends Vue {
    }
</script>

<style lang="scss">
    $color: red;

    .simple {
        color: $color;
    }
</style>
