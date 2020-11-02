var app = new Vue({
    el: '#memberEdit',
    data: {
      memberCert:[],
      memberData:[],
      // cid:'',
      editMember: {
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

      deleteMember(){
        fetch('api/memberDetail/delete_member.php')
      },

      // changeMember(){
      //   if (this.editMember[16] == 'delete'){
      //     this.deleteMember()
      //   } else{
      //     this.updateMember()
      //   }
      // },

      updateMember() {
        console.log(editMember)
        console.log(memberData)
        n = 0
        for (var i in this.editMember){
          if (i == ''){
            i = this.memberData[0][n]
          }
          n = n + 1
        }
        fetch('api/memberDetail/update_member.php', {
          method:'POST',
          body: JSON.stringify(this.editMember),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        // .then( response => response.json() )
        // .then( json => {
        //   console.log("Returned from post:", json);
        //   this.memberData = json;
        //   this.newMember = this.newMemberData();
        // });
      },

      editMemberData() {
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
      // this.initiate();
      this.getMember();
      this.getMemberCert();
    }
  });
  