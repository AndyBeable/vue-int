var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/socks.jpg',
    inStock: false,
    onSale: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    // inventory: 111,
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/socks.jpg',
      },
      {
        variantId: 22345,
        variantColor: 'blue',
        variantImage: './assets/socks-blue.jpg',
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
    // removeFromCart() {
    //   this.cart -= 1;
    // },
  },
});
