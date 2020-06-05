<template>
  <div>
      <h1 class="text-center mb-3">Live Bid</h1>
    <!-- <p>{{buyer}}</p> -->
    <div class="timer">
        <p class="border">{{timer}}</p>
    </div>
    <div class="chat-section">
        <div class="product-chat border">
            <h2 class="text-center mt-2">Product</h2>
                <div class="pc-img-div">
                    <img :src="`${imageUrl}/${buyer.product.image.defaultImage}`" alt="">
                </div>
            <div class="pc-info">
                <p><span>Product Name:</span> {{buyer.product.productName}}</p>
                <p><span>Owner:</span> {{buyer.owner.username}}</p>
                <p><span>Starting Price:</span> R${{buyer.product.price}}</p>
                <p><span>Current Bid:</span> R${{buyer.currentPrice}}</p>
                <p><span>Last Bidder:</span> {{buyer.winner.username}}</p>
                <p><span>Number of Bidders:</span> {{buyer.liveBidders.length}}</p>
            </div>
        </div>
        <div class="chatForm border">
          <div class="messages border mb-3">
                <p v-for="(message, i) in messages" :key="i" :class="userAuth.userId === message.userId ? 'myBid' : 'otherBid'"><span>{{message.username}}:</span> {{message.info}}</p>
          </div>
          <div class="btn-div">
              <textarea v-model="bidInput" class="form-control mb-2"></textarea>
              <p class="text-danger">{{error}}</p>
              <button @click="handleBid" class="site-btn btn btn-block">Enter</button>
          </div>
      </div>
    </div>
      
  </div>
</template>

<script>
import io from 'socket.io-client'
import {mapActions, mapState} from 'vuex';
export default {
    data:()=>({
        socket:null,
        userAuth:null,
        messages:[],
        bidInput:null,
        buyerId:null,
        imageUrl:null,
        error:null,
        timer:null
    }),

    computed:{
        ...mapState('Buyer', ['buyer'])
    },

    watch:{
        messages: async function(){
            await this.getBuyer({
            token:this.userAuth.token,
            buyerId:this.buyerId
        })
        }
    },

    methods:{
        ...mapActions('Buyer', ['getBuyer']),

        handleBid(){
            this.socket.emit('bid', {price:this.bidInput, bidId:this.buyerId, userId:this.userAuth.userId, username:this.userAuth.username});
            this.bidInput = null;
            this.error = null;
        }
    },

    async created(){
        this.userAuth = JSON.parse(localStorage.getItem("_speedbids"))
        this.imageUrl = process.env.VUE_APP_API_IMAGES;
        this.buyerId = this.$route.params.liveId
        await this.getBuyer({
            token:this.userAuth.token,
            buyerId:this.buyerId
        })
        this.socket = io.connect(process.env.VUE_APP_API_SOCKET);
        this.socket.emit("loggedIn", {bidId:this.buyerId, firstname:this.userAuth.firstname, lastname:this.userAuth.lastname, userId:this.userAuth.userId, username:this.userAuth.username})
        this.socket.on("logInMessage", (data)=>{
        this.messages.push(data);
        })

        this.socket.on("timer", (data)=>{
            this.timer = data;
        })

        this.socket.on("finished", ()=>{
            this.$router.push("/")
        })

        this.socket.on('error', (data)=>{
            this.error = data.error;
        })

        this.socket.on('bid2', (data)=>{
            this.messages.push(data);
        })
    }
}
</script>

<style scoped>
.chatForm{
    width:50%;
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

.chat-section{
    display: flex;
    justify-content: center;
}

.product-chat{
    width: 50%;
    height: 555px;
    margin-right: 20px;
}

.pc-img-div{
    margin:0 auto;
    width: 40%;
    height: 250px;
    background: gray;
}

.pc-img-div img{
    width: 100%;
    height: 100%;
}

h2{
    font-weight: 100;
}

span{
    font-weight: bold;
}

.pc-info{
    padding-left:30%;
    padding-top:10px;
}

.timer{
    text-align: center;
}

.timer p{
    font-size: 30px;
    border-radius: 10px;
    font-weight: 100;
    width: 100px;
    margin:0 auto 10px auto;
}
</style>