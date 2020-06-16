<template>
  <div>
      <h1 class="text-center mb-3">My Messages</h1>
      <p>{{myMessages}}</p>
      <div class="myMessages-div">
        <div v-for="(myMessage, i) in myMessages" :key="i" class="mmd border">
          <span>{{myMessage.sender.username}}</span>
          <button @click="handleMessage(myMessage.sender._id)" class="site-btn btn">Send Message</button>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  data:()=>({
    userAuth:null
  }),

  computed:{
    ...mapState('Message', ['myMessages']),
  },

  methods:{
    ...mapActions('Message', ['getMyMessages']),
    handleMessage(id){
      this.$router.push(`/send-message/${id}`)
    }
  },

  async created(){
    this.userAuth = JSON.parse(localStorage.getItem('_speedbids'));

    await this.getMyMessages({
      token:this.userAuth.token,
      userId:this.userAuth.userId
    })
  }


}
</script>

<style>
.mmd{
  margin:0 auto 10px auto;
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
}
</style>