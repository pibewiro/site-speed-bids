<template>
  <b-modal
    id="modal-recover-password"
    title="Recuperar Senha"
    size="md"
    centered
  >
    <p>A New Password Has been sent to your e-mail account</p>
    <p>After recievient your email please login to and go to your profile page to change your password</p>
    <template v-slot:modal-footer>
      <button @click="loginPage" class="btn site-btn">OK</button>
    </template>
  </b-modal>
</template>

<script>
export default {
  methods:{
    loginPage(){
      this.$router.push('/login');
    }
  }
}
</script>

<style>

</style>