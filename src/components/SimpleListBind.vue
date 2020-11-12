<template>
    <div>
        <v-btn @click="generateNewItem">
            Click to add item
        </v-btn>
        <ul>
            <template v-for="item in items">
                <li :key="item.id">
                    <span>{{ item.name }}</span>
                </li>
            </template>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';

    interface ISimpleListItem {
        id: string,
        name: string
    }

    @Component({ name: 'SimpleListBind' })
    export default class SimpleListBind extends Vue {
        items: ISimpleListItem[] = [];

        generateNewItem(): void {
            const id = new Date().toISOString();
            this.items.push({
                id,
                name: `(${this.items.length + 1}) ${id}`
            });
        }
    }
</script>
