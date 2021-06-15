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
      },
      {
        variantId: 22345,
        variantColor: 'blue',
      },
    ],
    sizes: [
      {
        size: 'small',
      },
      {
        size: 'medium',
      },
      {
        size: 'large',
      },
    ],
  },
});
