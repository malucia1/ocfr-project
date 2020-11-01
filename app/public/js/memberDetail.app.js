var app = new Vue({
  el: '#memberDetail',
  data: {
    memberCert:[],
    memberData:[]
  },

  methods:{

    getMemberCert(){
      fetch('api/memberDetail/get-memberCert.php')
        .then(response => response.json())
        .then(json => {
          this.memberCert=json;
          console.log(this.memberCert);
        });
      },

    getMember(){
      fetch('api/memberDetail/')
      .then(function(response) {return response.json()})
      .then(json => {
        this.memberData=json;
        console.log(this.memberData);
      })
    }

  },
  created() {
    this.getMemberCert();
    this.getMember();
  }
});
