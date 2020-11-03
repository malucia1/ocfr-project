var app = new Vue({
    el: '#memberEdit',
    data: {
      memberCert:[],
      memberData:[],
      certList: []
      // newCertification:{
      //   certification_id: '',
      //   certifying_agency: '',
      //   certification_name: '',
      //   expiration_period:''
      // },
      // cid:'',
      // editMember: {
      //   "member_id": "",
      //   "station_number": "",
      //   "radio_number": "",
      //   "firstname": "",
      //   "lastname": "",
      //   "address_street": "",
      //  "address_city": "",
      //   "address_state": "",
      //   "address_zip": "",
      //   "email": "",
      //   "date_of_birth": "",
      //   "gender":"",
      //   "mobile_phone": "",
      //   "work_phone": "",
      //   "position": "",
      //   "isActive": ""
      // }
    },
  
    methods:{
  
      getMemberCert(){
        fetch('api/memberDetail/get-memberCert.php')
        .then(response => response.json())
        .then(json => {
          this.memberCert=json;
          // console.log(this.memberCert);
        });
      },

      // updateMember() {
      //   console.log(this.editMember);
      //   console.log(this.memberData[0]);

      //   for (var i in this.editMember){
      //     if (this.editMember[i] == ""){
      //       this.editMember[i] = this.memberData[0][i]
      //     } 
      //   };
      //   console.log(this.editMember);
      //   fetch('api/memberDetail/update_member.php', {
      //     method:'POST',
      //     body: JSON.stringify(this.editMember),
      //     headers: {
      //       "Content-Type": "application/json; charset=utf-8"
      //     }
      //   })
        // .then( response => response.json() )
        // .then( json => {
        //   console.log("Returned from post:", json);
        //   this.memberData = json;
        //   this.editMember = this.editMemberData();
        // });
      // },

      // editMemberData() {
      //   return {
      //     "member_id": "",
      //     "station_number": "",
      //     "radio_number": "",
      //     "firstname": "",
      //     "lastname": "",
      //     "address_street": "",
      //     "address_city": "",
      //     "address_state": "",
      //     "address_zip": "",
      //     "email": "",
      //     "date_of_birth": "",
      //     "gender":"",
      //     "mobile_phone": "",
      //     "work_phone": "",
      //     "position": "",
      //     "isActive": ""
      //     // member_id: "",
      //     // station_number: "",
      //     // radio_number: "",
      //     // firstname: "",
      //     // lastname: "",
      //     // address_street: "",
      //     // address_city: "",
      //     // address_state: "",
      //     // address_zip: "",
      //     // email: "",
      //     // date_of_birth: "",
      //     // gender:"",
      //     // mobile_phone: "",
      //     // work_phone: "",
      //     // position: "",
      //     // isActive: ""
      //   }
      // },
      getMember(){
        fetch('api/memberDetail/')
        .then(function(response) {return response.json()})
        .then(json => {
          this.memberData=json;
          // console.log(this.memberData);
        })
      },
      fetchCert(){
        fetch('api/certifications/')
        .then(response => response.json())
        .then(json => {
          this.certList=json;
          // console.log(this.certList);
        });
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
      // this.initiate();
      this.getMember();
      this.getMemberCert();
      this.fetchCert();
    }
  });
  