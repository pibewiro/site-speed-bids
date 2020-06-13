<template>
  <div>
      <h1 class="text-center">Follows</h1>
      <div class="follow-div mt-3">
          <div v-for="(follow, i) in showMyFollows" :key="i" class="fd1 py-2 border">
              <h2 class="text-center"><router-link :to="`/user/${follow._id}`" class="user-link">{{follow.username}}</router-link></h2>
              <div class="img-div-follow">
                  <img :src="`${imageUrl}/${follow.image}`" alt="">
              </div>
              <div class="btn-div text-center pt-2">
                  <button @click="handleMessage(follow._id)" class="site-btn btn">Mandar Mensagen</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    data:()=>({
        userAuth:null,
        imageUrl:null
    }),

    computed:{
        ...mapState('Follow', ['showMyFollows']),
    },

    methods:{
        ...mapActions('Follow', ['showFollows', 'addFollow']),

        handleMessage(id){
            this.$router.push(`/send-message/${id}`)
        },
    },

    async created(){
        this.imageUrl = process.env.VUE_APP_API_IMAGES;

        this.userAuth = JSON.parse(localStorage.getItem('_speedbids'));

        await this.showFollows({
            token:this.userAuth.token,
            id:this.userAuth.userId
        })
    }
}
</script>

<style scoped>
.follow-div{
    width: 100%;
    margin:0 auto;
    display:grid;
    grid-template-columns: repeat(5, 19.22%);
    grid-gap:1em;
}

.img-div-follow{
    background:gray;
    width: 100px;
    height: 100px;
    margin:0 auto;
    border-radius: 100%;
}

.img-div-follow img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
}

h2{
    font-weight: 100;
}

.user-link{
    color: var(--primaryColor);
}

.user-link:hover{
    cursor: pointer;
    
}
</style>