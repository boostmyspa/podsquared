<template>
    <div class="product-side-toggle">
        <button class="product-side-toggle--btn btn" @click.left="toggleProductSide">
            <i class="fas fa-redo-alt"></i> Show {{ showProductFront ? 'Back' : 'Front' }}
        </button>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "ProductSideToggle",

        methods: {
            ...mapActions([
                'toggleProductSide',
            ]),
        },

        computed: {
            ...mapState([
                'showProductFront',
            ]),
        }
    }
</script>

<style scoped>

</style>