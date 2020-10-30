var app = new Vue({
  el: '#cert',
  data: {
    certList: [{
      certification_id: '',
      certifying_agency: '',
      certification_name: '',
      issue_date: '',
      expiration_date: ''
    }],
    newCertification: {
      certification_id: '',
      certifying_agency: '',
      certification_name: '',
      issue_date: '',
      expiration_date: ''
    }
  },

  methods:{
    fetchUser(){
      fetch('api/ocfr/')
      .then(response => response.json())
      .then(json => {
        this.certList=json;
        console.log(this.certList);
      });
    },

    createCertification() {
      fetch('api/ocfr/certification-create.php', {
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
        this.newCertification = this.newCerticationData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCertification);
    },
    newCertificationData() {
      return {
        certification_id: '',
        certifying_agency: '',
        certification_name: '',
        issue_date: '',
        expiration_date: ''
      }
    }

  },
  created() {
    this.fetchUser();
  }
});