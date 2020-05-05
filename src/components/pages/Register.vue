<template>
  <div class="register">
    <Navbar />
    <h1 class="my-3 text-center">Register</h1>
    <div class="form-div">
      <div class="formReg p-4 border">
        <div class="logo-div text-center">
          <img
            src="../../assets/logo.png"
            alt=""
          >
        </div>

        <div class="form-row">
          <div class="form-group regInline">
            <label for="">First Name</label>
            <input
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group regInline">
            <label for="">First Name</label>
            <input
              type="text"
              class="form-control"
            >
          </div>
        </div>

        <div class="form-row">
          <div class="form-group regInline">
            <label for="">First Name</label>
            <input
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group regInline">
            <label for="">First Name</label>
            <input
              type="text"
              class="form-control"
            >
          </div>
        </div>

        <div class="form-row">
          <div class="form-group regInline">
            <label for="">First Name</label>
            <input
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group regInline">
            <label for="">First Name</label>
            <input
              type="text"
              class="form-control"
            >
          </div>
        </div>

        <div class="text-center mt-3">
          <button class="site-btn btn btn-lg">Enter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../template/Navbar';
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.form-row {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.formReg {
  width: 60%;
  margin: 0 auto;
  box-shadow: 5px 5px 10px #ebebeb;
}

.regInline {
  width: 30%;
  margin-right: 10px;
}

.logo-div {
  margin-bottom: 20px;
}

.logo-div img {
  width: 75px;
  height: 75px;
}

@media (max-width: 1000px) {
  .form-row {
    display: block;
  }

  .regInline {
    margin-right: 0;
    width: 100%;
  }
}
</style>