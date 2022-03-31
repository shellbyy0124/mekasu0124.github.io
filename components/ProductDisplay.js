app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <a :href="url">Find It On Amazon</a>

        <p v-if="inStock">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out!</p>
        <p v-else>Out Of Stock</p>
        <p v-if="onSale">On Sale! {{ discount }}</p>

        <p>Shipping: {{ shipping }}</p>

        <product-details :details="details"></product-details>

        <h3>Available Colors:</h3>
        <div 
          class="color-circle"
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)"
          :style="{ backgroundColor: variant.color }">
        </div>
        <h3>Available Sizes:</h3>
        <div v-for="size in sizes">{{ size }}</div>

        <button 
          class="button" 
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          @click="addToCart"
          >
          Add Item
        </button>
        <button
          class="button"
          @click="removeFromCart"
          >
          Remove Item
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length":reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      cart: 0,
      selectedVariant: 0,
      description: 'Socks for Men and Women of All Ages!',
      url: 'https://www.amazon.com/?tag=operadesktop14-sd-us-20',
      discount: '10% OFF',
      details: ['50% Cottton','30% Wool','20% Polyester'],
      variants: [
        {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, saleStatus: true },
        {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, saleStatus: false }
      ],
      sizes: ['XX-Small','X-Small','Small','Medium','Large','X-Large','XX-Large'],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    onSale() {
      return this.variants[this.selectedVariant].saleStatus
    },
    shipping() {
      if (this.premium) {
        return 'free'
      }
      return 2.99
    }
  }
})