import LoadImage from '../util/loadImage';

export default {
    namespaced: true,

    state: {
        backgroundImage: {
            id: 1,
            src: null,
            image: null,
        },

        backgroundImageFront: {
            src: null,
            image: null,
        },

        backgroundImageBack: {
            src: null,
            image: null,
        },
    },

    getters: {

    },

    mutations: {
        setBackgroundImageId (state, id) {
            state.backgroundImage.id = id;
        },

        setBackgroundImageFront (state, { image, src }) {
            state.backgroundImageFront.src = src;
            state.backgroundImageFront.image = image;
        },

        setBackgroundImageBack (state, { image, src }) {
            state.backgroundImageBack.src = src;
            state.backgroundImageBack.image = image;
        },

        setBackgroundImageFrontAsCurrent (state) {
            state.backgroundImage.src = state.backgroundImageFront.src;
            state.backgroundImage.image = state.backgroundImageFront.image;
        },

        setBackgroundImageBackAsCurrent (state) {
            state.backgroundImage.src = state.backgroundImageBack.src;
            state.backgroundImage.image = state.backgroundImageBack.image;
        },
    },

    actions: {
        // on select/unSelect product color - set the background image Front/Back sources
        setBackgroundImage ({ commit, dispatch }, { imageItem, productId }) {
            commit('setBackgroundImageId', productId);

            const srcFront = imageItem.srcFront;
            const srcBack = imageItem.srcBack;

            LoadImage(
                (image) => {
                    commit('setBackgroundImageFront', { image, src: srcFront });
                    dispatch('setBackgroundImageCurrent');
                },
                srcFront
            );

            LoadImage(
                (image) => {
                    commit('setBackgroundImageBack', { image, src: srcBack });
                    dispatch('setBackgroundImageCurrent');
                },
                srcBack
            );
        },

        // on toggle Front/Back - set the Background (product) image
        setBackgroundImageCurrent ({ commit, rootState }) {
            const isFront = rootState.showProductFront;

            if (isFront) {
                commit('setBackgroundImageFrontAsCurrent');
            }
            else {
                commit('setBackgroundImageBackAsCurrent');
            }
        },
    }
}