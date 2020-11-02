var app = new Vue({
    el: '#expired',
    data: {
      memberList:[]
    },
  
    methods:{
  
      fetchExpired(){
        fetch('api/members/expired.php')
        .then(response => response.json())
        .then(json => {
          this.memberList=json;
          console.log(this.memberList);
        });
      }

    },
    created() {
      this.fetchExpired();
    }
  });
  