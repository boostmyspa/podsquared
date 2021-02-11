<template>
    <div class="design-image-pag">
        <v-stage ref="stage" :config="config">
            <v-layer>
                <v-image :config="config"></v-image>
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import LoadImage from '../../util/loadImage';

    export default {
        name: "designImagePad",

        data: () => {
           return {
               config: {
                   width: 500,
                   height: 500,
               },
           }
        },

        methods: {
            ...mapActions([
                'setDesignImage'
            ]),

            setImageSize (image) {
                const
                    imgWidth = image.width,
                    imgHeight = image.height,
                    boxWidth = this.maxSize.width,
                    boxHeight = this.maxSize.height;

                let
                    width,
                    height,
                    scale = Math.min(boxWidth / imgWidth, boxHeight / imgHeight);

                if (scale >= 1) {
                    // image is less than box
                    width = imgWidth;
                    height = imgHeight;
                }
                else {
                    width = imgWidth * scale;
                    height = imgHeight * scale;
                }

                this.config.width = width;
                this.config.height = height;
                this.config.image = image;

                let t = setTimeout(() => {
                    this.saveImage();
                    clearTimeout(t);
                });
            },

            saveImage () {
                const stage = this.$refs.stage.getNode();

                stage.toImage({
                    callback: (image) => {
                        this.setDesignImage(image);
                    }
                });
            },
        },

        computed: {
            ...mapState({
                designImageData: 'designImage',
                maxSize: 'designImagePadSize',
            }),

            imageSrc () {
                return this.designImageData.src;
            },
        },

        watch: {
            imageSrc () {
                LoadImage(
                    (image) => {
                        this.setImageSize(image);
                    },
                    this.imageSrc
                );
            },

        },

    }
</script>

<style scoped>

</style>