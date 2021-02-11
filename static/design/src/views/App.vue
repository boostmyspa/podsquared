<template>
    <div class="">
        <div class="side-bar">
            <p>
                <upload-image
                        @uploadedImage="uploadedDesignImage"
                >
                    Upload your design
                </upload-image>

                <template v-if="designImageSizeWarning">
                    <br>

                    <span v-if="designImageSizeWarning == 'medium'" class="alert-warning">Image have Medium quality size</span>
                    <span v-if="designImageSizeWarning == 'small'" class="alert-danger">Image have Small quality size</span>
                </template>
            </p>
            <p>
                <button @click.left="flipDesignImageHorizontal">
                    <i class="icon-flip-horizontal" title="Flip horizontal"></i>
                </button>
                &nbsp;
                <button @click.left="flipDesignImageVertical">
                    <i class="icon-flip-vertical" title="Flip vertical"></i>
                </button>
            </p>

            <button @click.left="getDesignImageData">Get Data</button>
            <p>
                x: {{ designImage.x }}
                <br>
                y: {{ designImage.y }}
                <br>
                width: {{ designImage.width }}
                <br>
                height: {{ designImage.height }}
                <br>
                rotation: {{ designImage.rotation }}
            </p>
        </div>

        <div class="canvas-container">
            <canvas-main></canvas-main>
            <canvas-design-image-pad></canvas-design-image-pad>
        </div>

        <products-list></products-list>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import UploadImage from './uploader/UploadImage';
    import ProductsList from './product/ProductsList';
    import CanvasMain from './canvas/CanvasMain';
    import DesignImagePad from './canvas/DesignImagePad';

    export default {
        name: "App",

        components: {
            'upload-image': UploadImage,
            'products-list': ProductsList,
            'canvas-main': CanvasMain,
            'canvas-design-image-pad': DesignImagePad,
        },

        methods: {
            ...mapActions([
                'setDesignImageOrigin',
                'flipDesignImageHorizontal',
                'flipDesignImageVertical',
            ]),

            getDesignImageData () {
                console.log(this.designImage);
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
        }
    }
</script>

<style scoped>

</style>