const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',      
      brand: 'Vue Mastery',
      selectedVariant: 0, // './assets/images/socks_green.jpg',
      inventory: 11,      
      details: ['50% Cotton','30% Wool','20% Polyester'],      
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false },
      ],
      description: 'Something to keep your feet warm!',
      sizes: ['Small', 'Medium', 'Large'],      
      url: 'https://duckduckgo.com/socks',      
    }
  },
  methods: {    

    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= ( this.cart > 0 ? 1 : 0 );      
    },
    updateVariant(index){
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product + ( this.variants[this.selectedVariant].onSale ? " is on sale!" : "")
    },
    inStock() {      
      return this.variants[this.selectedVariant].quantity > 0;      
    },
    cartEmpty() {
      return this.cart == 0;
    },
  }
});

