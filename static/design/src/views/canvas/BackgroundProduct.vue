<template>
    <v-layer>
        <v-image
                :config="backgroundImageConfig"
        ></v-image>
    </v-layer>
</template>

<script>
    import { mapState, /*mapActions*/ } from 'vuex';
    import LoadImage from '../../util/loadImage';
    import ContainImageInBox from '../../util/ContainImageInBox';

    export default {
        name: "backgroundProduct",

        props: [
            'boxContainer'
        ],

        data: () => {
            return {
                backgroundImage: null,
            }
        },

        computed: {
            ...mapState({
                backgroundImageData: 'backgroundImage',
            }),

            backgroundImageSrc () {
                return this.backgroundImageData.src;
            },

            backgroundImageConfig () {
                if (!this.backgroundImage)
                    return {
                        width: 0,
                        height: 0,
                    };

                const
                    image = this.backgroundImage,
                    box = this.boxContainer,
                    boxWidth = box.width,
                    boxHeight = box.height;

                const imageSize = ContainImageInBox(image, box);

                let
                    width = imageSize.width,
                    height = imageSize.height;

                return {
                    image: this.backgroundImage,
                    x: -width / 2,
                    y: -height / 2,
                    width: width,
                    height: height,
                    offsetX: -boxWidth / 2,
                    offsetY: -boxHeight / 2,
                };
            },
        },

        watch: {
            backgroundImageSrc () {
                LoadImage(
                    (image) => {
                        this.backgroundImage = image;
                    },
                    this.backgroundImageData.src
                );
            },
        },

        beforeMount () {
            const backgroundImageSrc = this.backgroundImageData.src;

            if (backgroundImageSrc) {
                LoadImage(
                    (image) => {
                        this.backgroundImage = image;
                    },
                    backgroundImageSrc
                );
            }
        },
    }
</script>

<style scoped>

</style>