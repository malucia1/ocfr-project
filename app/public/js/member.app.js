var app = new Vue({
  el: '#members',
  data: {
    memberList: [],
    newMember: [],
    testList: [],
    newTest: [],
    certList: [],
    newCertification: []
  },

  methods:{
    fetchUser(){
      fetch('api/ocfr/')
      .then(response => response.json())
      .then(json => {
        this.memberList=json;
        console.log(this.memberList);
      });
    },
    fetchTest(){
      fetch('api/ocfr/')
      .then(response => response.json())
      .then(json => {
        this.testList=json;
        console.log(this.testList);
      });
    },
    fetchCert(){
      fetch('api/ocfr/')
      .then(response => response.json())
      .then(json => {
        this.certList=json;
        console.log(this.certList);
      });
    },

    createMember() {
      fetch('api/ocfr/create.php', {
        method:'POST',
        body: JSON.stringify(this.newMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.memberList = json;
        this.newMember = this.newMemberData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newMember);
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
        this.newCertification = this.newCertificationData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCertification);
    },
    newMemberData() {
      return {
        member_id: "",
        station_number: "",
        radio_number: ""
      }
    },
    newCertificationData() {
      return {
        certification_id: '',
        certifying_agency: '',
        certification_name: '',
        expiration_period: ''
      }
    },
    newTestData() {
      return {
        test_id: "",
        test_agency: ""
      }
    }

  },
  created() {
    this.fetchUser();
    this.fetchCert();
    this.fetchTest();
  }
});
