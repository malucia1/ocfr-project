var app = new Vue({
  el: '#memberCertification',
  data: {
    memberInfo:[],
    certInfo: []
  },

  methods:{

    getMemberInfo(){
      fetch('api/certDetail/red-cert.php')
        .then(response => response.json())
        .then(json => {
          this.memberInfo=json;
          console.log(this.memberInfo);
        });
      },

    // getMember(){
    //   fetch('api/ocfr/get-member.php')
    //   .then(function(response) {return response.json()})
    //   .then(json => {
    //     this.memberData=json;
    //     console.log(this.memberData);
    //   })
    // }

  },
  created() {
    this.getMemberInfo();
    // this.getMember();
  }
});
