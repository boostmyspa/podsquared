<template>
    <div class="card__product product-card">
        <div class="media">
            <div class="product__img">
                <img :src="item.src" class="product-card--img" alt="">
            </div>
            <div class="media-body">
                <div class="title--product">
                    <h3>{{ item.title }}</h3>
                    <a @click.left.prevent="remove" href="#" class="action__pro">Remove</a>
                </div>
                <div class="select__size">
                    <div class="color__box" style="margin-top:0px;">
                        <h4>Select Your Colors</h4>
                        <ul class="color__list">
                            <color-item v-for="color in item.colors" :item="color" :key="color.color"></color-item>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import ColorItem from './ColorItem';

    export default {
        name: "ProductCard",

        components: {
            'color-item': ColorItem,
        },

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

            remove () {
                this.removeProduct(this.item);
            }
        },

        computed: {
            ...mapState('products', [
                'colorsList',
            ]),
        },
    }
</script>

<style scoped>

</style>