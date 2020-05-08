<template>
  <div>
    <div class="filter">
      <div>
        <div class="filter2 border-bottom">
          <h1 class="text-center">Products</h1>
          <button
            @click="changeDivs"
            class="btn-primary"
          >enter</button>
        </div>
        <div class="itemsP">
          <div class="itemP border"></div>
          <div class="itemP border"></div>
          <div class="itemP border"></div>
          <div class="itemP border"></div>
          <div class="itemP border"></div>
          <div class="itemP border"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    size: false,
  }),
  methods: {
    changeDivs() {
      if (!this.size) {
        document.querySelector('.filter2').style.height = '10vh';
        document.querySelector('.itemsP').style.minHeight = '81.5vh';
        this.size = true;
      } else {
        document.querySelector('.filter2').style.height = '20vh';
        document.querySelector('.itemsP').style.minHeight = '71.5vh';
        this.size = false;
      }
    },
  },
};
</script>

<style>
.filter {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}

.filter2 {
  width: 100%;
  height: 20vh;
}

.itemsP {
  width: 100%;
  min-height: 71.5vh;
}

.itemP {
  width: 50%;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.itemP:first-child {
  margin-top: 20px;
}

.itemP:last-child {
  margin-bottom: 20px;
}
</style>