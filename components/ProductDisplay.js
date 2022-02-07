app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    },
    'cartEmpty': {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `
    <div class="product-display">
      <div class="product-container" >
        <div class="product-image">
          <img :class="{'out-of-stock-img': !inStock }" v-bind:src="variants[selectedVariant].image" v-bind:alt="product + ' Picture'" :title="product + ' Picture'" />
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else-if="variants[selectedVariant].quantity > 0">Almost sold out!</p>
          <p v-else>Out of Stock</p>          
          <p>Shipping: {{shipping}}</p>
          
          <p>{{ description }}</p>

          <product-details :details="details"></product-details>

          <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
          class="color-circle" :style="{backgroundColor: variant.color, borderColor: variant.color }">
        </div>
        <table>
          <tr>
            <td><button class="button" :class="{disabledButton: !inStock }" @click="addToCart" :disabled="!inStock">Add to Cart</button></td>
            <td><button class="button" :class="{disabledButton: cartEmpty }" @click="removeFromCart" :disabled="cartEmpty">Remove One</button> </td>
          </tr>
        </table >
        </div>               
      </div >
    </div >`,
  data() {
    return {      
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,      
      details: ['50% Cotton', '30% Wool', '20% Polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 3, onSale: false },
      ],
      description: 'Something to keep your feet warm!',
      sizes: ['Small', 'Medium', 'Large'],
      url: 'https://duckduckgo.com/socks',
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart',this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit('remove-from-cart',this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0;
    },
    shipping() {
      if (this.premium){
        return 'Free'
      }else{
        return 2.99
      }
    }
  }


})