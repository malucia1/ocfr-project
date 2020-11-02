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


  },
  created() {
    this.fetchUser();
  }
});
