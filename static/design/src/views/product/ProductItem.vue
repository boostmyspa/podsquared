<template>
    <div class="product-item" @click.left="selectProduct">
        <figure class="product-item--figure">
            <img class="product-item--img" :src="item.src" alt="">
        </figure>
        <div class="product-item--info">
            <h4 class="product-item--title">{{ item.title }}</h4>
            <div class="product-item--description"
                 v-html="item.description"
            ></div>
        </div>
        <div class="product-item--icon-select" :class="item.selected ? 'selected' : ''">
            <i class="fas" :class="item.selected ? 'fa-check' : 'fa-plus'"></i>
        </div>
    </div>
</template>

<script>
    import { /*mapState,*/ mapActions } from 'vuex';

    export default {
        name: "ProductItem",

        props: [
            'item',
        ],

        // data () {
        //     return {
        //         publicPath: process.env.BASE_URL
        //     }
        // },

        methods: {
            ...mapActions('products', [
                'addProduct',
                'removeProduct',
            ]),

            selectProduct () {
                if (this.item.selected) {
                    this.removeProduct(this.item);
                }
                else {
                    this.addProduct(this.item);
                }
            },
        },
    }
</script>

<style scoped>

</style>