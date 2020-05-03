<template>
  <div class="site-nav">
    <div>
      <img
        src="../../assets/logo.png"
        alt=""
      >
      <h1>Speed Bids</h1>
    </div>

    <div class="nav-items">
      <router-link to="dash2">Home</router-link>
      <router-link to="dash2">Home</router-link>
      <router-link to="dash2">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
.site-nav {
  background: var(--primaryColor);
  color: var(--siteText);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
}

.site-nav div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-nav div img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.nav-items a {
  color: var(--siteText);
  text-decoration: none;
  display: block;
  padding: 25px 40px;
}

.nav-items a:hover {
  background: var(--hoverColor);
  color: #fff;
  text-decoration: none;
}
</style>