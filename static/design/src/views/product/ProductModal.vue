<template>
    <div v-show="showModal" class="product-modal">
        <button @click.left="closeProductModal" class="product-modal--btn-close btn-close close"></button>
        <div class="product-modal-catalog">
            <h2 class="mb-4">Products Catalog</h2>

            <div class="product-modal-catalog--products">
                <div class="row">
                    <div class="col-md-6" v-for="product in products" :key="'id-product-' + product.id">
                        <product-item :item="product"></product-item>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-modal-selected">
            <h5 class="d-none d-lg-block mb-5">SELECTED PRODUCTS</h5>
            <div class="products-selected d-none d-lg-block mb-4">
                <products-selected-item v-for="product in selectedProducts" :item="product" :key="'id-product-selected-' + product.id"></products-selected-item>

                <p v-if="selectedProductsEmpty">Please select at least one product to sell.</p>
            </div>

            <strong class="d-lg-none">{{ selectedProducts.length }} selected</strong>
            <button @click.left="closeProductModal" :disabled="selectedProductsEmpty" class="product-modal--btn-save btn btn-primary text-uppercase">Save products</button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import ProductItem from './ProductItem';
    import ProductsSelectedItem from './ProductsSelectedItem';

    export default {
        name: "ProductModal",

        components: {
            'product-item': ProductItem,
            'products-selected-item': ProductsSelectedItem,
        },

        props: [
            'showModal',
        ],

        methods: {
            ...mapActions('products', [
                'setFirstProduct',
            ]),

            closeProductModal () {
                this.$emit('closeProductModal');

                if (this.selectedProductsEmpty) {
                    this.setFirstProduct();
                }
            },
        },

        computed: {
            ...mapState('products', [
                'products',
                'selectedProducts',
            ]),

            selectedProductsEmpty () {
                return !this.selectedProducts.length;
            }
        },


    }
</script>

<style scoped>

</style>