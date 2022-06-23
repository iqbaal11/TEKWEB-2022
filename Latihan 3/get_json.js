Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {},
	  articles: {},
    };
  },
  methods: {
    getHeaderData()
    {
      axios
        .get(
		  "https://raw.githubusercontent.com/iqbaal11/TEKWEB-2022/main/Latihan%203/header.json"
        )
        .then((res) => {
          console.log(res.data);
          this.header = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
	
	getArticles()
    {
      axios
        .get(
		  "https://raw.githubusercontent.com/iqbaal11/TEKWEB-2022/main/Latihan%203/articles.json"
        )
        .then((res) => {
          console.log(res.data);
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
		 
  },
  beforeMount() {
    this.getHeaderData()
	this.getArticles()
  },
}).mount("#app");