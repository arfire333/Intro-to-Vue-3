const appa = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      url: 'https://duckduckgo.com/socks',
      image: './assets/images/socks_blue.jpg',
      inventory: 100,
      onSale: true,
      details: ['50% cotton','30% wool','20% polyester'],
      description: 'Something to keep your feet warm!',
      variants: [
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' },
      ],
      sizes: ['small', 'medium', 'large']
    }
  }
});

