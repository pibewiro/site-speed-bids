<template>
  <div>
      <h1 class="text-center mb-3">Live Bid</h1>

      <div class="chatForm border">
          <div class="messages border mb-3">
      <p v-for="(message, i) in messages" :key="i" :class="userAuth.userId === message.userId ? 'myBid' : 'otherBid'"><span>{{userAuth.username}}:</span> {{message.info}}</p>
          </div>
          <div class="btn-div">
              <textarea v-model="bidInput" class="form-control mb-2"></textarea>
              <button @click="handleBid" class="site-btn btn btn-block">Enter</button>
          </div>
      </div>
      
  </div>
</template>

<script>
// import io from 'socket.io-client'
export default {
    data:()=>({
        socket:null,
        userAuth:null,
        messages:[],
        messages2:[],
        bidInput:null
    }),

    methods:{
        handleBid(){
            this.socket.emit('bid', {price:this.bidInput, bidId:this.$route.params.liveId, userId:this.userAuth.userId});
            this.bidInput = null
        }
    },

    created(){
        this.userAuth = JSON.parse(localStorage.getItem("_speedbids"))
        this.socket = window.io.connect(process.env.VUE_APP_API_SOCKET);
        this.socket.emit("loggedIn", {bidId:this.$route.params.liveId, firstname:this.userAuth.firstname, lastname:this.userAuth.lastname, userId:this.userAuth.userId})
        this.socket.on("logInMessage", (data)=>{
            this.messages.push(data);
        })

                    this.socket.on('bid2', (data)=>{
                this.messages.push(data);
            })
    }
}
</script>

<style>
.chatForm{
    width:40%;
    margin:0 auto;
    padding: 10px;
}

.messages{
    height: 500px;
    padding: 10px;
    overflow-y: scroll;
}

.myBid{
    margin:0;
    text-align: right;
}

.otherBid{
    margin:0;
    text-align: left;
}

span{
    font-weight: bold;
}
</style>