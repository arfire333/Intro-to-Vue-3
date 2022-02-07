const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,            
    }
  },
  methods: {
    addToCart(id) {
      console.log(id);
      this.cart.push(id);
    },
    removeFromCart(id) {
      console.log(id);
      var idx = this.cart.indexOf(id);
      if (idx >= 0) {
        this.cart.splice(idx, 1);
      }
    },
  },
  computed: {
    cartEmpty() {
      return this.cart.length == 0;      
    }
  }
});

