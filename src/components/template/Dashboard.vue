<template>
  <div class="dashboard">
    <Navbar />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '../template/Navbar';
export default {
  components: {
    Navbar,
  },

  created() {
    if (!localStorage.getItem('_speedBids')) {
      this.$router.push('/');
    }
  },
};
</script>

<style>
</style>