<template>
    <section class="glamour">
        <div class="glamour__wrapper w-100" :class="showProductModal ? 'd-none' : ''">
            <div class="step_small d-block d-md-none">
                <span>Step 3</span>
                <p>Change</p>
            </div>
            <div class="content_glamour">
                <div class="row no-gutters w-100 h-100">
                    <div class="col-xl-8 col-md-7">
                        <div class="img__glamour">
                            <div id="canvas-container" class="canvas-container">
                                <canvas-main></canvas-main>
                                <canvas-design-image-pad></canvas-design-image-pad>

                                <product-side-toggle></product-side-toggle>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-5">
                        <sidebar :showProductModal="showProductModal" @openProductModal="openProductModal"></sidebar>
                    </div>
                </div>
            </div>
        </div>

        <product-modal
                :showModal="showProductModal"
                @closeProductModal="closeProductModal"
        ></product-modal>
    </section>
</template>

<script>
    import CanvasMain from '../canvas/CanvasMain';
    import ProductSideToggle from '../canvas/ProductSideToggle';
    import DesignImagePad from '../canvas/DesignImagePad';
    import Sidebar from './Sidebar';
    import ProductModal from '../product/ProductModal';

    export default {
        name: "GlamourContainer",

        components: {
            'canvas-main': CanvasMain,
            'product-side-toggle': ProductSideToggle,
            'canvas-design-image-pad': DesignImagePad,
            'sidebar': Sidebar,
            'product-modal': ProductModal,
        },

        data: () => {
            return {
                showProductModal: false,
            }
        },

        methods: {
            openProductModal () {
                this.showProductModal = true;
            },

            closeProductModal () {
                this.showProductModal = false;
            },
        },
    }
</script>

<style scoped>

</style>