const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateAddCart(id) {
            this.cart.push(id)
        },
        updateRemCart() {
            this.cart.pop()
        }
    }
})