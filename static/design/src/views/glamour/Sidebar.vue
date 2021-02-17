<template>
    <div class="sidebar__glamour">
        <h3 class="title__glamour mt-3 p-md-2">First, Let's Start by Uploading Your Design</h3>

        <upload-image
                :class="'d-none d-md-block mt-3 mb-2'"
                :dragUploadEnable="true"
                @uploadedImage="uploadedDesignImage"
        >
            <div class="custom-file-boxed">
                <div class="dz-message custom-file-boxed-label">
                    <img class="avatar avatar-xl avatar-4by3 mb-3" :src="`${publicPath}img/frontdash/svg/illustrations/browse.svg`" alt="Image Description">
                    <h5 class="mb-1">Choose files to upload</h5>
                    <p class="mb-2">or</p>

                    <upload-image
                            @uploadedImage="uploadedDesignImage"
                    >
                        <span class="btn btn-sm btn-primary">Browse files</span>
                    </upload-image>
                </div>
            </div>
        </upload-image>
        <upload-image
                :class="'d-md-none mt-3 mb-2'"
                @uploadedImage="uploadedDesignImage"
        >
            <span class="btn btn-sm btn-primary">Browse files</span>
        </upload-image>

        <template v-if="designImageSizeWarning">
            <div v-if="designImageSizeWarning == 'medium'" class="alert alert-warning">Image have Medium quality size</div>
            <div v-if="designImageSizeWarning == 'small'" class="alert alert-danger">Image have Small quality size</div>
        </template>

        <div class="">
            <div class="title__glamour mt-3 mb-2">Flip Your Design</div>

            <button @click.left="flipDesignImageHorizontal" class="btn btn-sm btn-ghost-primary">
                <i class="icon-flip-horizontal" title="Flip horizontal"></i>
            </button>
            &nbsp;
            <button @click.left="flipDesignImageVertical" class="btn btn-sm btn-ghost-primary">
                <i class="icon-flip-vertical" title="Flip vertical"></i>
            </button>
        </div>

        <div class="glamour__body__content">
            <h3 class="title__glamour">Select Your Products</h3>

            <div class="product-card-list">
                <product-card v-for="product in selectedProducts" :item="product" :key="'id-product-card-' + product.id"></product-card>
            </div>

            <div class="btn__holder">
                <button @click.left="openProductModal" class="btn btn-outline-dark w-100">
                    <img :src="`${publicPath}img/mstore/img/more.svg`" alt="">
                    Add More Product
                </button>

                <a href="#" class="btn btn-primary w-100 cta-pink">Create an Order</a>

                <p class="note_deleivery">
                    Guaranteed Delivery before Father's Day!
                </p>
            </div>
            <div class="help__card__content">
                <h3>Need Help?</h3>

                <div id="accordion">
                    <div class="card__help">
                        <div class="card__help__header" id="headingOne">
                            <a href="#" class="collapsed"  data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <span>Sizing Chart</span>
                            </a>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card__help__body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card__help">
                        <div class="card__help__header" id="headingTwo">
                            <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span>Product Information</span>
                            </a>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card__help__body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import UploadImage from '../uploader/UploadImage';
    import ProductCard from '../product/ProductCard';

    export default {
        name: "Sidebar",

        components: {
            'upload-image': UploadImage,
            'product-card': ProductCard,
        },

        props: [
            'showProductModal'
        ],

        data: () => {
            return {
                publicPath: process.env.BASE_URL,
            }
        },

        methods: {
            ...mapActions([
                'setDesignImageOrigin',
                'flipDesignImageHorizontal',
                'flipDesignImageVertical',
            ]),

            openProductModal () {
                this.$emit('openProductModal');
            },

            uploadedDesignImage (image) {
                this.setDesignImageOrigin(image);
            }
        },

        computed: {
            ...mapState([
                'designImage',
                'designImageSizeWarning',
            ]),

            ...mapState('products', [
                'selectedProducts',
            ]),
        },


    }
</script>

<style scoped>

</style>