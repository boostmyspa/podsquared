import Vue from 'vue';
import Vuex from 'vuex';

import products from './products';

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        products,
    },

    state: {
        designImage: {
            imageOrigin: null,
            image: null,
            src: '',
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
        },

        designImageFront: {
            imageOrigin: null,
            image: null,
            src: '',
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
        },

        designImageBack: {
            imageOrigin: null,
            image: null,
            src: '',
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
        },

        designImagePadSize: {
            width: 1000,
            height: 1000,
        },

        showProductFront: true, // Front/Back switch
        designImageSizeWarning: '', // good: ''; bed: 'medium'; veryBad: 'small'

        backgroundImage: {
            id: 1,
            src: null,
        },

        backgroundImageFrontSrc: null,
        backgroundImageBackSrc: null,

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
        },

        toggleProductSide (state) {
            state.showProductFront = !state.showProductFront;
        },

        setDesignImageAsFront (state) {
            state.designImage = Object.assign({}, state.designImageFront);
        },

        setDesignImageAsBack (state) {
            state.designImage = Object.assign({}, state.designImageBack);
        },

        setDesignImageFrontAsCurrent (state) {
            state.designImageFront = Object.assign({}, state.designImage);
        },

        setDesignImageBackAsCurrent (state) {
            state.designImageBack = Object.assign({}, state.designImage);
        },

        setBackgroundImageFrontSrc (state, src) {
            state.backgroundImageFrontSrc = src;
        },

        setBackgroundImageBackSrc (state, src) {
            state.backgroundImageBackSrc = src;
        },

        setBackgroundImageFrontAsCurrent (state) {
            state.backgroundImage.src = state.backgroundImageFrontSrc;
        },

        setBackgroundImageBackAsCurrent (state) {
            state.backgroundImage.src = state.backgroundImageBackSrc;
        },
    },

    actions: {
        // on select/unSelect product color - set the background image Front/Back sources
        setBackgroundImage ({ commit, dispatch }, { imageItem, productId }) {
            commit('setBackgroundImageId', productId);

            const srcFront = imageItem.srcFront;
            const srcBack = imageItem.srcBack;

            commit('setBackgroundImageFrontSrc', srcFront);
            commit('setBackgroundImageBackSrc', srcBack);

            dispatch('setBackgroundImageCurrent');
        },

        // on toggle Front/Back - set the Background (product) image
        setBackgroundImageCurrent ({ state, commit }) {
            const isFront = state.showProductFront;

            if (isFront) {
                commit('setBackgroundImageFrontAsCurrent');
            }
            else {
                commit('setBackgroundImageBackAsCurrent');
            }
        },

        // on toggle Front/Back - set the Design image
        setDesignImageCurrent ({ state, commit }) {
            const isFront = state.showProductFront;

            if (isFront) {
                commit('setDesignImageBackAsCurrent');
                commit('setDesignImageAsFront');
            }
            else {
                commit('setDesignImageFrontAsCurrent');
                commit('setDesignImageAsBack');
            }
        },

        setDesignImageOrigin ({ commit, dispatch }, image) {
            commit('setDesignImageOrigin', image);
            dispatch('setDesignImageSizeWarning', image);

            // reset image properties
            commit('setDesignImagePosition', {
                x: 0,
                y: 0,
            });

            commit('setDesignImageSize', {
                width: 0,
                height: 0,
            });

            commit('setDesignImageRotation', 0);
            dispatch('resetDesignImageFlip');
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

        toggleProductSide ({ commit, dispatch }) {
            commit('toggleProductSide');

            // switch Front/Back Background and Design images
            dispatch('setBackgroundImageCurrent');
            dispatch('setDesignImageCurrent');
        },

    }
})