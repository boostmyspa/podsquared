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
            'product',
            'item',
        ],

        methods: {
            ...mapActions('products', [
                'toggleProductColor',
            ]),

            selectColor () {
                this.toggleProductColor({ colorItem: this.item, product: this.product });
            }
        },

    }
</script>

<style scoped>

</style>