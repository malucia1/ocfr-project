var app = new Vue({
  el: '#members',
  data: {
    memberList: [],
    newMember: {
      member_id: "",
      station_number: "",
      radio_number: "",
      firstname: "",
      lastname: "",
      address_street: "",
      address_city: "",
      address_state: "",
      address_zip: "",
      email: "",
      date_of_birth: "",
      gender: "",
      mobile_phone: "",
      work_phone: "",
      position: "",
      isActive: ""
    },
    getId: '',
    certList: [],
    newCertification: []
  },

  methods:{
    fetchUser(){
      fetch('api/members/')
      .then(response => response.json())
      .then(json => {
        this.memberList=json;
        console.log(this.memberList);
      });
    },

    // fetchCert(){
    //   fetch('api/member/')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.certList=json;
    //     console.log(this.certList);
    //   });
    // },

    createMember() {
      fetch('api/members/create.php', {
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





    // createCertification() {
    //   fetch('api/certifications/certification-create.php', {
    //     method:'POST',
    //     body: JSON.stringify(this.newCertification),
    //     headers: {
    //       "Content-Type": "application/json; charset=utf-8"
    //     }
    //   })
    //   .then( response => response.json() )
    //   .then( json => {
    //     console.log("Returned from post:", json);
    //     this.certList = json;
    //     this.newCertification = this.newCertificationData();
    //   });

    //   console.log("Creating (POSTing)...!");
    //   console.log(this.newCertification);
    // },
    newMemberData() {
      return {
        member_id: "",
        station_number: "",
        radio_number: "",
        firstname: "",
        lastname: "",
        address_street: "",
        address_city: "",
        address_state: "",
        address_zip: "",
        email: "",
        date_of_birth: "",
        gender: "",
        mobile_phone: "",
        work_phone: "",
        position: "",
        isActive: ""
      }
    }
    // newCertificationData() {
    //   return {
    //     certification_id: '',
    //     certifying_agency: '',
    //     certification_name: '',
    //     expiration_period: ''
    //   }
    // }
  },
  created() {
    this.fetchUser();
    // this.fetchCert();
  }
});
