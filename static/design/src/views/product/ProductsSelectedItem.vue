<template>
    <div class="products-selected-item">
        <img class="products-selected-item--img" :src="item.src" alt="">
        <div class="products-selected-item--title">{{ item.title }}</div>
        <button class="products-selected-item--remove btn btn-close" @click.left="unSelectProduct"></button>
    </div>
</template>

<script>
    import { /*mapState,*/ mapActions } from 'vuex';

    export default {
        name: "ProductsSelectedItem",

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
                'removeProduct',
            ]),

            unSelectProduct () {
                this.removeProduct(this.item);
            },
        }
    }
</script>

<style scoped>

</style>