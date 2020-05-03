<template>
  <div class="home">
    <Navbar />
    <div class="img-div">
      <img
        src="../../assets/home.jpg"
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
      <div class="items">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>

      <div class="alert">
        <h1 class="text-center">Recieve alerts on new items</h1>
        <form class="alert-form p-4">
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

          <div class="form-group">
            <button class="site-btn btn-lg btn-block">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';
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
};
</script>

<style>
.img-div {
  width: 100%;
  height: calc(50vh - 74px);
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
  justify-content: center;
  align-items: center;
}

.item {
  width: 20%;
  height: 300px;
  margin-left: 20px;
  border: 1px solid #e6e6e6;
}

.alert-form {
  width: 30%;
  margin: 0 auto;
}
</style>