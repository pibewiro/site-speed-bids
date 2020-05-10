<template>
  <div>
    <div class="filter">
      <div>
        <div class="filter2 border-bottom">
          <h1 class="text-center">Products</h1>
          <span
            class="divArrow"
            @click="changeDivs"
            id="arrowUp"
          >
            <i class="fas fa-angle-double-up"></i>
          </span>

          <span
            class="divArrow"
            @click="changeDivs"
            id="arrowDown"
          >
            <i
              @click="changeDivs"
              v-if="this.size"
              class="fas fa-angle-double-down"
            ></i>
          </span>
        </div>
        <div class="itemsP">
          <div
            class="itemP border"
            v-for="(product, i) in products"
            :key="i"
          >
            <div class="itemImg border border-bottom-0">
              <img
                :src="`${imageUrl}/${product.image.defaultImage}`"
                alt=""
              >
              <div class="imgOverlay"></div>
            </div>
            <div class="itemInfo">
              <p><span class="font-weight-bold">Product Name:</span> {{product.productName}}</p>
              <p><span class="font-weight-bold">Price:</span> {{product.price}}</p>
              <p><span class="font-weight-bold">Category:</span> {{product.category}}</p>
              <p><span class="font-weight-bold">Username:</span> {{product.user.username}}</p>
              <div class="text-center">
                <button class="site-btn btn">Enter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    size: false,
    imageUrl: null,
  }),

  computed: {
    ...mapState('Product', ['products']),
  },

  methods: {
    ...mapActions('Product', ['getProducts']),
    changeDivs() {
      let up = document.getElementById('arrowUp');
      let down = document.getElementById('arrowDown');
      if (!this.size) {
        document.querySelector('.filter2').style.height = '10vh';
        document.querySelector('.itemsP').style.minHeight = '81.5vh';
        this.size = true;
        up.style.display = 'none';
        down.style.display = 'inline';
      } else {
        document.querySelector('.filter2').style.height = '20vh';
        document.querySelector('.itemsP').style.minHeight = '71.5vh';
        this.size = false;
        up.style.display = 'inline';
        down.style.display = 'none';
      }
    },
  },

  async created() {
    await this.getProducts();
    this.imageUrl = process.env.VUE_APP_API_IMAGES;
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
  transition: ease-in 0.5s;
}

.itemsP {
  width: 100%;
  /* min-height: 71.5vh; */
  padding: 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 20%);
  grid-gap: 1em;
}

.itemP {
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  /* margin: 0 auto; */
  /* margin-bottom: 20px; */
  margin-bottom: 0;
}

.itemImg {
  height: 250px;
  width: 100%;
  position: relative;
}

.itemImg img {
  display: block;
  width: 100%;
  height: 100%;
}

.itemInfo {
  width: 100%;
  padding: 15px 10px;
}

.itemImg:hover {
  cursor: pointer;
}

.itemImg:hover > .imgOverlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}

/* .itemP:first-child {
  margin-top: 20px;
} */

.divArrow {
  font-size: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>