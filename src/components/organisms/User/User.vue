<template>
  <div>
    <div class="form-div">
      <div class="formReg p-4 border">
        <h1 class="text-center mb-4">{{user.firstname}} {{user.lastname}}</h1>
        <div class="userImgDiv text-center">
          <div class="userImg">
            <img
              :src="`${imageUrl}/${user.image}`"
              alt=""
            >
          </div>
        </div>

        <div>
          <div class="userInfo">
            <div class="userInfoDiv">
              <p class="userLabel">Firstname: </p>
              <p class="userData">{{user.firstname}}</p>
            </div>

            <div class="userInfoDiv">
              <p class="userLabel">Lastname: </p>
              <p class="userData">{{user.lastname}}</p>
            </div>

            <div class="userInfoDiv">
              <p class="userLabel">Username: </p>
              <p class="userData">{{user.username}}</p>
            </div>
          </div>

          <div class="userInfo">
            <div class="userInfoDiv">
              <p class="userLabel">City: </p>
              <p class="userData">{{user.address.city}}</p>
            </div>

            <div class="userInfoDiv">
              <p class="userLabel">State: </p>
              <p class="userData">{{user.address.state}}</p>
            </div>

            <div class="userInfoDiv">
              <p class="userLabel">Country: </p>
              <p class="userData">{{user.address.country}}</p>
            </div>
          </div>

          <div class="text-center mt-3">
            <button class="site-btn btn btn-lg">Follow</button>
          </div>
        </div>
      </div>

      <div class="userProducts">
        <h1 class="text-center mt-5">{{user.firstname}}´s Products</h1>

        <div class="userProductsDiv">
          <div
            class="userProductDiv border mb-5"
            v-for="(product, i) in products"
            :key="i"
          >

            <div class="productImgDiv">
              <img
                :src="`${imageUrl}/${product.image.defaultImage}`"
                alt=""
              >
            </div>

            <div class="productInfoDiv">
              <div class="productInfo">
                <p><span class="userLabel">Product Name: </span><span class="userData">{{product.productName}}</span></p>
                <p><span class="userLabel">Price: </span><span class="userData">R${{product.price}}</span></p>
                <p><span class="userLabel">Uploaded: </span><span class="userData">{{formatTime(product.createdAt)}}</span></p>
                <div class="text-center">
                  <button
                    @click="handleUserProduct(product._id)"
                    class="site-btn btn btn-lg"
                  >Enter</button>
                </div>
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
import moment from 'moment';
moment.locale('pt-br');
export default {
  data: () => ({
    imageUrl: null,
    userAuth: null,
  }),

  computed: {
    ...mapState('User', ['user']),
    ...mapState('Product', ['products']),
  },

  methods: {
    ...mapActions('User', ['getUser']),
    ...mapActions('Product', ['getMyProducts']),

    formatTime(time) {
      return moment(time).format('LL');
    },

    handleUserProduct(id) {
      this.$router.push(`/product/${id}`);
    },
  },

  async created() {
    this.userAuth = JSON.parse(localStorage.getItem('_speedbids'));
    await this.getUser({ id: this.$route.params.id });

    await this.getMyProducts({
      token: this.userAuth.token,
      id: this.user._id,
    });
    this.imageUrl = `${process.env.VUE_APP_API_IMAGES}`;
  },
};
</script>

<style>
.userInfo {
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.userInfo:last-child {
  margin-top: 20px;
}

.userInfoDiv {
  width: 25%;
}

.userLabel {
  font-weight: bold;
  font-size: 20px;
  margin: 0;
}

.userData {
  font-size: 20px;
  margin: 0;
}

.userProductsDiv {
  width: 100%;
  margin: 0 auto;
}

.userProductDiv {
  width: 60%;
  margin: 0 auto;
  display: flex;
  padding: 10px;
}

.productImgDiv {
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.productImgDiv img {
  width: 100%;
  height: 100%;
}

.productInfoDiv {
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>