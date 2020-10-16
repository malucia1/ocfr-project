var app = new Vue({
  el: '#members',
  data: {
    memberList: [{
      member_id: '',
      station_number: '',
      radio_number: ''
    }],
    newMember: {
      member_id: '',
      station_number: '',
      radio_number: ''
    }
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

    createComment() {
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
    newMemberData() {
      return {
        member_id: "",
        station_number: "",
        radio_number: ""
      }
    }

  },
  created() {
    this.fetchUser();
  }
});
