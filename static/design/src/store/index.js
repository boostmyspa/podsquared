import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        designImage: {
            imageOrigin: null,
            image: null,
            src: '', // '/img/design/Baby-Yoda-PNG-File.png'
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
        },

        designImagePadSize: {
            width: 500,
            height: 500,
        },

        designImageSizeWarning: '', // good: ''; bed: 'medium'; veryBad: 'small'

        backgroundImage: {
            id: 1,
            src: '/img/t-shirt/Gildan64000_WhiteBackground_HeatherBronze.jpg',
        },

        printArea: {
            width: 14 * 300, // 14" * 300dpi
            height: 16 * 300, // 16" * 300dpi
        },

        designCropArea: {
            width: 12*14,
            height: 12*16,
        },

        designCropCorrection: {
            x: 0,
            y: 0,
        },
    },

    getters: {

    },

    mutations: {
        setDesignImageOrigin (state, image) {
            state.designImage.imageOrigin = image;

            if (image) {
                state.designImage.src = image.src;
            }
        },

        setDesignImage (state, image) {
            state.designImage.image = image;
        },

        setDesignImagePosition (state, position) {
            state.designImage.x = Math.round(position.x);
            state.designImage.y = Math.round(position.y);
        },

        setDesignImageSize (state, size) {
            state.designImage.width = Math.round(size.width);
            state.designImage.height = Math.round(size.height);
        },

        setDesignImageRotation (state, rotation) {
            state.designImage.rotation = rotation;
        },

        setBackgroundImageId (state, id) {
            state.backgroundImage.id = id;
        },

        setBackgroundImageSrc (state, src) {
            state.backgroundImage.src = src;
        },

        flipDesignImageHorizontal (state) {
            state.designImage.scaleX *= -1;
        },

        flipDesignImageVertical (state) {
            state.designImage.scaleY *= -1;
        },

        resetDesignImageFlip (state) {
            state.designImage.scaleX = 1;
            state.designImage.scaleY = 1;
        },

        setDesignImageSizeWarning (state, warning) {
            state.designImageSizeWarning = warning
        }
    },

    actions: {
        setDesignImageOrigin ({ commit, dispatch }, image) {
            commit('setDesignImageOrigin', image);
            dispatch('setDesignImageSizeWarning', image);
        },

        setDesignImage ({ commit }, image) {
            commit('setDesignImage', image);
        },

        setDesignImagePosition ({ commit }, position) {
            commit('setDesignImagePosition', position);
        },

        setDesignImageSize ({ commit }, size) {
            commit('setDesignImageSize', size);
        },

        setDesignImageRotation ({ commit }, rotation) {
            commit('setDesignImageRotation', rotation);
        },

        setBackgroundImage ({ commit }, image) {
            const id = image.id;
            const src = image.src;

            commit('setBackgroundImageId', id);
            commit('setBackgroundImageSrc', src);
        },

        flipDesignImageHorizontal ({ commit }) {
            commit('flipDesignImageHorizontal');
        },

        flipDesignImageVertical ({ commit }) {
            commit('flipDesignImageVertical');
        },

        resetDesignImageFlip ({ commit }) {
            commit('resetDesignImageFlip');
        },

        setDesignImageSizeWarning ({ state, commit }, image) {
            const printWidth = state.printArea.width;
            const printHeight = state.printArea.height;
            const imageWidth = image.width;
            const imageHeight = image.height;

            const scale = Math.max(imageWidth / printWidth, imageHeight / printHeight);

            // 300dpi > good
            let warning = '';

            if (scale < 1 && scale >= 0.5) {
                // 150dpi > medium
                warning = 'medium';
            }
            else if (scale < 0.5) {
                // < 150dpi = bad
                warning = 'small';
            }

            commit('setDesignImageSizeWarning', warning);
        },

    }
})