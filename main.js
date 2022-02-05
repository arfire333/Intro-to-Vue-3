const appa = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',      
      image: './assets/images/socks_green.jpg',
      inventory: 100,      
      details: ['50% Cotton','30% Wool','20% Polyester'],      
      variants: [
        { id: 2234, color: 'Green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'Blue', image: './assets/images/socks_blue.jpg' },
      ],
      description: 'Something to keep your feet warm!',
      sizes: ['Small', 'Medium', 'Large'],
      onSale: true,
      url: 'https://duckduckgo.com/socks',      
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    }
  }
});

