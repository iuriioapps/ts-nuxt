<template>
    <div>
        <label for="simple-number-input">Computed:</label>
        <input
            id="simple-number-input"
            v-model.number="input"
            type="number"
        >
        <div>Value: {{ computedNumber }}</div>
        <div>Another: {{ anotherValue }}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Watch, Vue } from 'nuxt-property-decorator';

    @Component({ name: 'SimpleComputed' })
    export default class SimpleComputed extends Vue {
        input: number = 0;
        anotherValue: number = 0;

        get computedNumber(): number {
            return this.input * 2;
        }

        @Watch('input')
        inputChanged(value: number): void {
            this.anotherValue = value * 3;
        }
    }
</script>
