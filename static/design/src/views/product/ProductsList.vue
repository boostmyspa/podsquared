<template>
    <div class="products-list">
        <img v-for="image in images"
             :class="backgroundImageId == image.id ? 'active' : ''"
             :src="image.src"
             :key="image.id"
             alt=""
             @click.left="setImage(image)"
        >
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "ProductsList",

        data: () => {
            return {
                images: [
                    {
                        id: 1,
                        src: '/img/t-shirt/Gildan64000_WhiteBackground_HeatherBronze.jpg',
                    },
                    {
                        id: 2,
                        src: '/img/t-shirt/Gildan64000_WhiteBackground_HeatherBerry.jpg',
                    },
                ],
            }
        },

        methods: {
            ...mapActions([
                'setBackgroundImage',
            ]),

            setImage (imageItem) {
                this.setBackgroundImage(imageItem);
            }
        },

        computed: {
            ...mapState([
                'backgroundImage'
            ]),

            backgroundImageId () {
                return this.backgroundImage.id;
            },

            backgroundImageSrc () {
                return this.backgroundImage.src;
            },
        },

    }
</script>

<style scoped>

</style>