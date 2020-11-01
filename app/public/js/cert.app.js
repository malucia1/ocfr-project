var app = new Vue({
  el: '#cert',
  data: {
    certList: [],
    // newCertification: []
    newCertification:{
      certification_id: '',
      certifying_agency: '',
      certification_name: '',
      expiration_period:''
    }
  },

  methods:{
    fetchCert(){
      fetch('api/certifications/')
      .then(response => response.json())
      .then(json => {
        this.certList=json;
        console.log(this.certList);
      });
    },

    createCertification() {
      fetch('api/certifications/certification-create.php', {
        method:'POST',
        body: JSON.stringify(this.newCertification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.certList = json;
        this.newCertification = this.newCertificationData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCertification);
    },
    newCertificationData() {
      return {
        certification_id: '',
        certifying_agency: '',
        certification_name: '',
        expiration_period: ''
      }
    }

  },
  created() {
    this.fetchCert();
  }
});
