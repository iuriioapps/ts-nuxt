<template>
    <div class="simple-event-bind">
        <label for="test-text-input-field">
            Enter text below and press enter
        </label>
        <input
            id="test-text-input-field"
            type="text"
            @keydown.enter.prevent="value = $event.target.value"
        >
        <span>{{ value }}</span>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';

    @Component({ name: 'SimpleEventBind' })
    export default class SimpleEventBind extends Vue {
        value: string = '';
    }
</script>

<style lang="scss">
    .simple-event-bind {
        input[type="text"] {
            border: solid thin grey;
        }
    }
</style>
