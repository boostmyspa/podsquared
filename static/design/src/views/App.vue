<template>
    <glamour-container></glamour-container>
</template>

<script>
    import { /*mapState,*/ mapActions } from 'vuex';
    import GlamourContainer from './glamour/GlamourContainer';

    export default {
        name: "App",

        components: {
            'glamour-container': GlamourContainer,
        },

        methods: {
            ...mapActions('products', [
                'setProducts',
                'setFirstProduct',
            ]),
        },

        computed: {

        },

        beforeMount () {
            // set products from Django
            const products = JSON.parse(window.PRODUCTS);
            this.setProducts(products);

            this.setFirstProduct();
        }
    }
</script>

<style scoped>

</style>