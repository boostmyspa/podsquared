<template>
    <li>
        <label @click.left="selectColor" class="checkbox-style-3-label">
            <span class="product-item--color" :style="`background: ${item.color};`">
                <i v-if="item.selected" class="fas fa-check"></i>
            </span>
        </label>
    </li>
</template>

<script>
    import { /*mapState,*/ mapActions } from 'vuex';

    export default {
        name: "ColorItem",

        props: [
            'item',
        ],

        methods: {
            ...mapActions('products', [
                'toggleProductColor',
            ]),

            selectColor () {
                this.toggleProductColor(this.item);
            }
        },

    }
</script>

<style scoped>

</style>