<template>
  <div class="home">
    <Navbar />
    <div class="img-div">
      <img
        src="../../../assets/home.gif"
        alt=""
      >
      <div class="content">
        <h1 class="text-center mb-4">Speed Buyer</h1>
        <div class="text-center content-btn-div">
          <button
            @click="login"
            class="site-btn login-btn btn btn-lg mr-2"
          >Login</button>
          <button
            @click="register"
            class="site-btn login-btn btn btn-lg"
          >Cadastrar</button>
        </div>
      </div>
    </div>
    <div class="product-div">
      <h1 class="text-center pt-3">Produtos Recentes</h1>
      <div class="div1">
        <!-- <div class="slider border">
          <i class="arrow left"></i>
        </div> -->
        <div class="items">
          <div v-for="(product, i) in products" :key="i" class="item">
            <div class="i-prd-img-div">
              <img :src="`${imageUrl}/${product.image.defaultImage}`" alt="">
            </div>
            <div class="i-prd-info">
              <p><span>Nome do Produto:</span> {{product.productName}}</p>
              <p><span>Preço:</span> R${{product.price}}</p>
            </div>
          </div>
        </div>
        <!-- <div class="slider border">
          <i class="arrow right"></i>
        </div> -->
      </div>

      <!-- <div class="alert">
        <h1 class="text-center">Recieve alerts on new items</h1>
        <form class="alert-form p-4 border">
          <div class="form-group">
            <label for="">Name:</label>
            <input
              type="text"
              class="form-control"
            >
          </div>

          <div class="form-group">
            <label for="">Name:</label>
            <input
              type="text"
              class="form-control"
            >
          </div>

          <div class="form-group">
            <label for="">Name:</label>
            <input
              type="text"
              class="form-control"
            >
          </div>

          <div class="">
            <button class="site-btn btn btn-lg">Login</button>
          </div>
        </form>
      </div> -->
    </div>
  </div>
</template>

<script>
import Navbar from '../../template/Navbar';
import {mapActions, mapState} from 'vuex'
export default {
  data:()=>({
    imageUrl:null
  }),

  components: {
    Navbar,
  },

  computed:{
    ...mapState('Product', ['products'])
  },

  methods: {
    ...mapActions('Product', ['getProductsHomePage']),

    login() {
      this.$router.push('/login');
    },

    register() {
      this.$router.push('/register');
    },
  },

  created() {
    if (localStorage.getItem('_speedbids')) {
      this.$router.push('/dashboard');
    }

    this.imageUrl = process.env.VUE_APP_API_IMAGES

    this.getProductsHomePage();
  },
};
</script>

<style>
.img-div {
  width: 100%;
  height: calc(58vh - 74px);
  position: relative;
}

.img-div img {
  display: block;
  width: 100%;
  height: 100%;
}

.img-div:after {
  content: '';
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  z-index: 999;
  transform: translate(-50%, -50%);
  color: var(--siteText);
}

.product-div {
  width: 100%;
  /* height: 80vh; */
}

.items {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  /* background: red; */
}

.item {
  width: 23%;
  height: 300px;
  /* margin-left: 20px; */
  border: 1px solid #e6e6e6;
  box-shadow: 5px 5px 10px#ebebeb;
}

.alert-form {
  width: 30%;
  margin: 0 auto;
  box-shadow: 5px 5px 10px#ebebeb;
}

.slider {
  display: flex;
  width: 100px;
  height: 100px;
  /* border-radius: 100%; */
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  box-shadow: 5px 5px 10px#ebebeb;
}

.slider:hover {
  cursor: pointer;
  width: 120px;
  height: 120px;
}

.arrow {
  border: solid var(--primaryColor);
  border-width: 0 1px 1px 0px;
  display: inline-block;
  padding: 1px;
  width: 40px;
  height: 40px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.div1 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

h1 {
  font-weight: 100;
}

.content h1 {
  font-weight: 500;
  font-size: 60px;
}

.login-btn{
  padding: 20px 100px;
  font-size: 30px;
}

.i-prd-img-div{
    height: 200px;
  width: 100%;
  background: gray;
}

.i-prd-img-div img{
  width: 100%;
  height: 100%;
}

.i-prd-info{
  padding:10px;
}
.i-prd-info span{
  font-weight: bold;
}

@media (max-width: 1000px) {
.content-btn-div{
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-btn-div button{
  padding:10px 35px;
  font-size: 20px;
}
.content h1 {
  padding-top:100px;
  font-weight: 500;
  font-size: 40px;
}
  .items {
    display: block;
  }

  .item {
    width: 80%;
    margin: 0 auto 20px auto;
  }

  .alert-form {
    width: 80%;
  }

  .slider {
    display: none;
  }
}
</style>