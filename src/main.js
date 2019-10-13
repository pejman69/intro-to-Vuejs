var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'src/assets/vmSocks-green-onWhite.jpg',
    inStock: true,
    details: ["80% cotton", "20% polyester", "Grender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: 'src/assets/vmSocks-green-onWhite.jpg',
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: 'src/assets/vmSocks-blue-onWhite.jpg',
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})
