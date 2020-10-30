var app = new Vue({
  el: '#test',
  data: {
    testList: [],
    newTest: []
  },

  methods:{
    fetchTest(){
      fetch('api/ocfr/')
      .then(response => response.json())
      .then(json => {
        this.testList=json;
        console.log(this.testList);
      });
    },

    createTest() {
      fetch('api/ocfr/test-create.php', {
        method:'POST',
        body: JSON.stringify(this.newTest),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.testList = json;
        this.newTest = this.newTestData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newTest);
    },
    newTestData() {
      return {
        test_id: "",
        test_agency: ""
      }
    }

  },
  created() {
    this.fetchTest();
  }
});
