<template>
    <v-layer>
        <v-image
                :config="backgroundImageConfig"
        ></v-image>
    </v-layer>
</template>

<script>
    import { mapState, /*mapActions*/ } from 'vuex';
    import ContainImageInBox from '../../util/ContainImageInBox';

    export default {
        name: "backgroundProduct",

        props: [
            'boxContainer'
        ],

        methods: {

        },

        computed: {
            ...mapState('backgroundImage', [
                'backgroundImage',
            ]),

            backgroundImageConfig () {
                const image = this.backgroundImage.image;

                if (!image)
                    return {
                        image: null,
                        width: 0,
                        height: 0,
                    };

                const
                    box = this.boxContainer,
                    boxWidth = box.width,
                    boxHeight = box.height;

                const imageSize = ContainImageInBox(image, box);

                let
                    width = imageSize.width,
                    height = imageSize.height;

                return {
                    image: image,
                    x: -width / 2,
                    y: -height / 2,
                    width: width,
                    height: height,
                    offsetX: -boxWidth / 2,
                    offsetY: -boxHeight / 2,
                };
            },
        },
    }
</script>

<style scoped>

</style>