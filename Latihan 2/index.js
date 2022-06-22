Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {
        title: "Iqbaal Izzulhaq",
        description:
          "Ini adalah tempat saya untuk berbagi segala pengetahuan yang saya peroleh tentang koding dan teknologi.",
        social: {
          email: {
            url: "https://web.facebook.com/fareed.frenologica/",
            title: "  iqbaalizzulhaq@gmail.com",
          },
        },
        imageProfile:
          "dog.png",
      },
      articles: [
        {
          title: 'The Magic of Vue',
          description: "This is your first looping using Vue",
          thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
        }
      ]
    };
  },
}).mount("#app");