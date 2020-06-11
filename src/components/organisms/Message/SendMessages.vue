<template>
  <div>
      <h1 class="text-center mb-3">Live Bid</h1>

    <div class="chat-section">
        <div class="product-chat border">
            <h2 class="text-center mt-2">Product</h2>
                <!-- <div class="pc-img-div">
                    <img :src="`${imageUrl}/${buyer.product.image.defaultImage}`" alt="">
                </div> -->
            <div class="pc-info">
                <!-- <p><span>Product Name:</span> {{buyer.product.productName}}</p>
                <p><span>Owner:</span> {{buyer.owner.username}}</p>
                <p><span>Starting Price:</span> R${{buyer.product.price}}</p>
                <p><span>Current Bid:</span> R${{buyer.currentPrice}}</p>
                <p><span>Last Bidder:</span> {{!buyer.winner ? '' : buyer.winner.username}}</p>
                <p><span>Number of Bidders:</span> {{buyer.liveBidders.length}}</p> -->
            </div>
        </div>
        <div class="chatForm border">
          <div class="messages border mb-3">
                <!-- <p v-for="(message, i) in messages" :key="i" :class="userAuth.userId === message.userId ? 'myBid' : 'otherBid'"><span>{{message.username}}:</span> {{message.info}}</p> -->
          </div>
          <div class="btn-div">
              <textarea class="form-control mb-2"></textarea>
              <button  class="site-btn btn btn-block b-button">Enter</button>
          </div>
      </div>
    </div>
      
  </div>
</template>

<script>
// import io from 'socket.io-client'

export default {

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
</style>