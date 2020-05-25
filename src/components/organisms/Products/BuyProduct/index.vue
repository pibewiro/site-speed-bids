<template>
  <div>
    <h1 class="text-center">Place a Price</h1>
    <div class="productSection border">
      <div class="prdImgDiv">
        <img
          :src="`${imageUrl}/${product.image.defaultImage}`"
          alt=""
        >
      </div>

      <div class="productInfo">
        <p class="m-0"><span>Seller:</span> {{product.user.username}}</p>
        <p class="m-0"><span>Starting Price:</span> R${{product.price}}</p>
        <p class="m-0"><span>Current Price:</span> R${{buyers.currentPrice}}</p>
        <p class="m-0"><span>Date Added: </span> {{formatDate(product.createdAt)}}</p>
        <p class="m-0"><span>Until: </span> {{formatDateTime(product.endDate)}}</p>
      </div>
    </div>

    <div class="form-group priceInput">
      <div>
        <label for="">Place a Price: </label>
        <input
          class="form-control"
          type="text"
          v-model="placePrice"
        >
        <button
          @click="handlePrice"
          class="site-btn btn btn-lg"
        >Place Price</button>
      </div>
      <p class="text-danger">{{this.error.price}}</p>
    </div>
    <div class="priceSection">
      <div
        v-for="(buyer, i) in buyers.prices"
        :key="i"
        class="priceCard border"
      >
        <p class="m-0"><span>Username:</span> {{buyer.buyerId.username}}</p>
        <p class="m-0"><span>Bid:</span> ${{buyer.price}}</p>
        <p class="m-0"><span>Date Added: </span> {{formatDateTime(buyer.dateAdded)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import swal from 'sweetalert2';
import moment from 'moment';
moment.locale('pt-br');

export default {
  data: () => ({
    userAuth: null,
    placePrice: null,
    productId: null,
    imageUrl: null,
    error: {},
  }),

  computed: {
    ...mapState('Product', ['product']),
    ...mapState('Buyer', ['buyers', 'addedPrice']),
  },

  methods: {
    ...mapActions('Product', ['getProduct']),
    ...mapActions('Buyer', ['getBuyers', 'addPrice']),

    formatDate(time) {
      return moment(time).format('DD/MM/YYYY');
    },

    formatDateTime(time) {
      return moment(time).format('DD/MM/YYYY HH:mm');
    },

    async handlePrice() {
      try {
        await this.addPrice({
          token: this.userAuth.token,
          id: this.productId,
          data: {
            price: this.placePrice,
            userId: this.userAuth.userId,
          },
        });

        swal.fire('Price Updated', `${this.addedPrice}`, 'success');
        await this.getBuyers({
          id: this.productId,
          token: this.userAuth.token,
        });

        this.placePrice = null;
      } catch (err) {
        this.error = err.response.data;
      }
    },
  },

  async created() {
    this.imageUrl = process.env.VUE_APP_API_IMAGES;
    this.userAuth = JSON.parse(localStorage.getItem('_speedbids'));
    this.productId = this.$route.params.id;
    await this.getProduct({ id: this.productId });
    await this.getBuyers({
      id: this.productId,
      token: this.userAuth.token,
    });
  },
};
</script>

<style scoped>
.priceSection {
  width: 50%;
  margin: 0 auto;
}

.priceCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
}

span {
  font-weight: bold;
}

.prdImgDiv {
  width: 400px;
  height: 400px;
  background: gray;
  margin: 0 auto;
}

.prdImgDiv img {
  width: 100%;
  height: 100%;
}

.productSection {
  width: 50%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px 0 10px 0;
}

.productInfo {
  line-height: 2em;
  width: 400px;
  margin: 0 auto;
}

.priceInput {
  width: 50%;
  margin: 40px auto;
}

.priceInput div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

.priceInput input {
  width: 55%;
  margin-left: 10px;
  margin-right: 10px;
}

.priceInput p {
  width: 75%;
  margin: 0 auto;
  text-align: left;
}
</style>