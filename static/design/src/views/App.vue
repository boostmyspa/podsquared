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
                'setFirstProduct',
            ]),
        },

        computed: {

        },

        beforeMount () {
            this.setFirstProduct();
        }
    }
</script>

<style scoped>

</style>