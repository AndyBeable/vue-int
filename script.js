Vue.component('product', {
  template: `
  <div class="product">
        <div class="product-image">
          <img v-bind:src="image" />
        </div>
        <div class="product-info">
          <h1>{{ title}}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else :class="{outStock: !inStock}">Out of Stock</p>
          <p>{{ sale }}</p>

          <ul>
            <li v-for="detail in details">{{detail}}</li>
          </ul>

          <div
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
          ></div>

          <button
            v-on:click="addToCart"
            :disabled="!inStock"
            :class="{disabledButton: !inStock}"
          >
            Add to Cart
          </button>

          <div class="cart">
            <p>Cart({{cart}})</p>
          </div>
        </div>
      </div>
      `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      onSale: false,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/socks.jpg',
          variantQuantity: 10,
        },
        {
          variantId: 22345,
          variantColor: 'blue',
          variantImage: './assets/socks-blue.jpg',
          variantQuantity: 0,
        },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale!';
      }
      return this.brand + ' ' + this.product + ' are not on sale';
    },
  },
});

var app = new Vue({
  el: '#app',
});
