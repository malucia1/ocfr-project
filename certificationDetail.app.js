var app = new Vue({
  el: '#memberCertification',
  data: {
    memberCert:[],
    memberData:[]
  },

  methods:{

    getMemberCert(){
      fetch('api/ocfr/get-memberCert.php')
        .then(response => response.json())
        .then(json => {
          this.memberCert=json;
          console.log(this.memberCert);
        });
      },

    getMember(){
      fetch('api/ocfr/get-member.php')
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
