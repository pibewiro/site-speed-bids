<template>
  <div class="myProducts">
    <h1 class="text-center">My Products</h1>
    <div class="productsContent">
      <div
        v-for="(product, i) in products"
        :key="i"
        class="productContent border"
      >
        <div class="prdContentImgDiv">
          <img
            :src="`${imageUrl}/${product.image.defaultImage}`"
            alt=""
          >
        </div>
        <div class="prdContentInfo">
          <div>
            <p class="text-center"><span class="font-weight-bold">Product Name:</span> {{product.productName}}</p>
            <p class="text-center"><span class="font-weight-bold">Price:</span> {{product.price}}</p>
            <p class="text-center"><span class="font-weight-bold">Status:</span> {{product.status}}</p>
            <button
              @click="productInfo(product._id)"
              class="site-btn btn btn-lg px-4 py-2"
            >Edit Product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    userAuth: null,
    imageUrl: null,
  }),

  computed: {
    ...mapState('Product', ['products']),
  },

  methods: {
    ...mapActions('Product', ['getMyProducts']),

    productInfo(id) {
      this.$router.push(`/my-product/${id}`);
    },
  },

  created() {
    this.userAuth = JSON.parse(localStorage.getItem('_speedbids'));
    this.getMyProducts({
      id: this.userAuth.userId,
      token: this.userAuth.token,
    });

    this.imageUrl = process.env.VUE_APP_API_IMAGES;
  },
};
</script>

<style>
.productsContent {
  width: 100%;
  padding-top: 20px;
}

.productContent {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prdContentInfo {
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prdContentImgDiv img {
  width: 100%;
  height: 100%;
}

.prdContentImgDiv {
  width: 50%;
  height: 300px;
}
</style>
