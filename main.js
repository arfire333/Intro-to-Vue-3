const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',      
      image: './assets/images/socks_green.jpg',
      inventory: 11,      
      details: ['50% Cotton','30% Wool','20% Polyester'],      
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
      ],
      description: 'Something to keep your feet warm!',
      sizes: ['Small', 'Medium', 'Large'],
      onSale: true,
      url: 'https://duckduckgo.com/socks',      
    }
  },
  methods: {
    inStock() {      
      return this.inventory > 0;      
    },
    cartEmpty() {
      return this.cart == 0;
    },
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= ( this.cart > 0 ? 1 : 0 );      
    },
    updateImage(image){
      this.image = image;
    }
  }
});

