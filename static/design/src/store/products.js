import Vue from 'vue';

export default {
    namespaced: true,

    state: {
        products: [], // all products from database
        selectedProducts: [],
    },

    getters: {
        getSelectedProductIndexById: (state) => (id) => {
            return state.selectedProducts.findIndex( (item) => item.id == id )
        },
    },

    mutations: {
        setProducts (state, products) {
            state.products = products;
        },

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
        setProducts ({ commit }, products) {
            commit('setProducts', products);
        },

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

            const productId = product.id;

            // take image from selected color or from the first of the product colors
            const imageItem = selected ? colorItem : product.colors[0];

            dispatch('backgroundImage/setBackgroundImage', { imageItem, productId }, { root: true });
        },

        toggleProductColor ({ dispatch }, { colorItem, product }) {
            const selected = !colorItem.selected;

            dispatch('setProductColor', { product, colorItem, selected });
        },
    }
}