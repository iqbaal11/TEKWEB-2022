let apiUrl = "http://iqbl.my.id/myapi/index.php/";

Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {},
        articles: []
      };
    },
    methods:{    
        getHeaderData()
        {
          axios
            .get(apiUrl+"users/0")
            .then((res) => {              
              this.header = res.data;
              this.getArticles();
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getArticles()
        {
            axios
            .get(
              "https://raw.githubusercontent.com/faridsurya/Vue-Axios-Basic/master/contents/articles.json"
            )
            .then((res) => {              
              this.articles = res.data;
            })
            .catch((error) => {
              console.log(error);
            });
        }
    },
    beforeMount() {
        this.getHeaderData()
    }
  }).mount("#app");
  