import Vue from 'vue';

const publicPath = process.env.BASE_URL;

export default {
    namespaced: true,

    state: {
        products: [
            {
                id: 1,
                title: 'T-Shirt Gildan HeatherBerry',
                src: publicPath + 'img/t-shirt/Gildan64000_WhiteBackground_HeatherBerry.jpg',
                description: 'T-Shirt Description text goes here',
                colors: [
                    {
                        title: 'brown',
                        color: '#CBA876',
                        src: publicPath + 'img/t-shirt/Gildan64000_WhiteBackground_HeatherBerry.jpg',
                        selected: false,
                    },
                    {
                        title: 'd-brown',
                        color: '#956743',
                        src: publicPath + 'img/mockups/img1.png',
                        selected: false,
                    },
                    {
                        title: 'orange',
                        color: '#FABB98',
                        src: publicPath + 'img/mockups/img5.png',
                        selected: false,
                    },
                ],
                selected: false,
            },
            {
                id: 2,
                title: 'T-Shirt Gildan HeatherBronze',
                src: publicPath + 'img/t-shirt/Gildan64000_WhiteBackground_HeatherBronze.jpg',
                description: 'T-Shirt Description text goes here',
                colors: [
                    {
                        title: 'gray',
                        color: '#BCBBC1',
                        src: publicPath + 'img/t-shirt/Gildan64000_WhiteBackground_HeatherBronze.jpg',
                        selected: false,
                    },
                    {
                        title: 'l-brown',
                        color: '#E9D8C4',
                        src: publicPath + 'img/mockups/img6.png',
                        selected: false,
                    },
                    {
                        title: 'brown',
                        color: '#CBA876',
                        src: publicPath + 'img/mockups/img10.png',
                        selected: false,
                    },
                ],
                selected: false,
            },
            {
                id: 3,
                title: 'T-Shirt Gildan HeatherBronze',
                src: publicPath + 'img/mockups/img5.png',
                description: 'T-Shirt Description text goes here',
                colors: [
                    {
                        title: 'orange',
                        color: '#FABB98',
                        src: publicPath + 'img/mockups/img5.png',
                        selected: false,
                    },
                ],
                selected: false,
            },
        ],

        selectedProducts: [],

    },

    getters: {
        getSelectedProductIndexById: (state) => (id) => {
            return state.selectedProducts.findIndex( (item) => item.id == id )
        },
    },

    mutations: {
        add (state, product) {
            state.selectedProducts.push(product);
        },

        remove (state, index) {
            state.selectedProducts.splice(index, 1);
        },

        setProductSelect (state, { product, selected }) {
            Vue.set(product, 'selected', selected);
        },

        setProductColor (state, { colorItem, selected }) {
            Vue.set(colorItem, 'selected', selected);
        },
    },

    actions: {
        addProduct ({ commit }, product) {
            commit('add', product);
            commit('setProductSelect', { product, selected: true });
        },

        removeProduct ({ getters, commit, dispatch }, product) {
            const index = getters.getSelectedProductIndexById(product.id);

            commit('remove', index);
            commit('setProductSelect', { product, selected: false });

            product.colors.forEach((colorItem) => {
                dispatch('setProductColor', { product, colorItem, selected: false });
            });
        },

        setFirstProduct ({ state, dispatch }) {
            const firstProduct = state.products[0];

            dispatch('addProduct', firstProduct);
            dispatch('toggleProductColor', { colorItem: firstProduct.colors[0], product: firstProduct });
        },

        setProductColor ({ commit, dispatch }, { product, colorItem, selected }) {
            commit('setProductColor', { colorItem, selected });

            let imageItem = {};

            // set product as canvas background
            if (selected) {
                imageItem.src = colorItem.src;
            }
            else {
                imageItem.src = product.src;
            }

            imageItem.id = product.id;

            dispatch('setBackgroundImage', imageItem, { root: true });
        },

        toggleProductColor ({ dispatch }, { colorItem, product }) {
            const selected = !colorItem.selected;

            dispatch('setProductColor', { product, colorItem, selected });
        },
    }
}