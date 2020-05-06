<template>
  <div class="register">
    <Navbar />
    <h1 class="text-center my-3">Login</h1>
    <div class="loginDiv">
      <div class="loginForm border p-4">
        <div class="logo-div text-center">
          <img
            src="../../assets/logo.png"
            alt=""
          >
        </div>
        <p class="error">{{this.error.invalid}}</p>
        <div class="form-group">
          <label for="">Email</label>
          <input
            type="text"
            class="form-control"
            v-model="email"
          >
        </div>

        <div class="form-group">
          <label for="">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
          >
        </div>

        <div class="form-group">
          <button
            @click="loginClick"
            class="site-btn btn btn-block"
          >Enter</button>
        </div>
        <div class="text-center">
          <router-link
            class="forgotPassword"
            to='/forgot-password'
          >Forgot Password</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../template/Navbar';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    Navbar,
  },

  data() {
    return {
      email: null,
      password: null,
      error: {},
    };
  },

  computed: {
    ...mapState('Auth', ['token']),
  },

  methods: {
    ...mapActions('Auth', ['login']),

    async loginClick() {
      try {
        await this.login({
          email: this.email,
          password: this.password,
        });
        localStorage.setItem('_speedBids', this.token);
        this.$router.push('/dashboard');
      } catch (err) {
        this.error = err.response.data;
      }
    },
  },

  created() {
    if (localStorage.getItem('_speedBids')) {
      this.$router.push('/dashboard');
    }
  },
};
</script>

<style>
.loginDiv {
  width: 25%;
  margin: 0 auto;
  box-shadow: 5px 5px 10px #e0e0e0;
}

.forgotPassword {
  color: var(--primaryColor);
  cursor: pointer;
}

.error {
  color: red;
  text-align: center;
  margin: 0;
}

@media (max-width: 1000px) {
  .loginDiv {
    width: 90%;
  }
}
</style>