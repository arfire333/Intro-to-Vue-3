const appa = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      url: 'https://duckduckgo.com/socks',
      image: './assets/images/socks_blue.jpg',
      inventory: 100,
      onSale: true,
      description: 'Something to keep your feet warm!'
    }
  }
});

