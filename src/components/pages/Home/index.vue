<template>
  <div class="home">
    <Navbar />
    <div class="img-div">
      <img
        src="../../../assets/home.jpg"
        alt=""
      >
      <div class="content">
        <h1 class="text-center mb-4">Speed Bids Website</h1>
        <div class="text-center">
          <button
            @click="login"
            class="site-btn btn-lg mr-2"
          >Login</button>
          <button
            @click="register"
            class="site-btn btn-lg"
          >Register</button>
        </div>
      </div>
    </div>
    <div class="product-div">
      <h1 class="text-center pt-3">Popular Products</h1>
      <div class="div1">
        <div class="slider border">
          <i class="arrow left"></i>
        </div>
        <div class="items">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="slider border">
          <i class="arrow right"></i>
        </div>
      </div>

      <div class="alert">
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
            <button class="site-btn btn-lg btn-block">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../template/Navbar';
export default {
  components: {
    Navbar,
  },

  methods: {
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
  background: rgba(0, 0, 0, 0.5);
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
@media (max-width: 1000px) {
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