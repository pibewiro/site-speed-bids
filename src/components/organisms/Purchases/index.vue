<template>
  <div>
    <h1 class="text-center">Purchases</h1>
    <div class="myTable">
      <b-table
        class="mt-3"
        striped
        :fields="fields"
        :items="items"
        responsive
      >

        <template v-slot:cell(price)="row">
          <span class="align-middle">R${{row.item.price}}</span>
        </template>

        <template v-slot:cell(createdAt)="row">
          <span class="align-middle">{{formatDate(row.item.createdAt)}}</span>
        </template>

        <template v-slot:cell(status)="row">
          <span :class="row.item.status === 'Pending' ? 'pending' : 'paid' ">{{row.item.status}}</span>
        </template>

        <template v-slot:cell(options)="row">
          <button
            class="site-btn btn mr-3"
            v-b-modal="`ModalProductInfo${row.item._id}`"
          >Product Info</button>
          <button
            v-if="row.item.status === 'Pending'"
            @click="checkout(row.item)"
            class="site-btn btn"
          >Checkout</button>
          <ModalProductInfo
            :id="row.item._id"
            :items="row.item"
          />
        </template>
      </b-table>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ModalProductInfo from './ModalProductInfo';
import moment from 'moment';
moment.locale('pt-br');

export default {
  components: {
    ModalProductInfo,
  },

  data: () => ({
    userAuth: null,
    fields: [
      {
        key: 'product.productName',
        label: 'Product Name',
        class: 'align-middle',
      },
      { key: 'price', label: 'Price' },
      { key: 'createdAt', label: 'Date' },
      { key: 'status', label: 'Status', sortable: true },
      { key: 'options', label: 'Options' },
    ],
    items: null,
  }),

  computed: {
    ...mapState('Purchase', ['purchases']),
  },

  methods: {
    ...mapActions('Purchase', ['getPurchases']),
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY');
    },

    checkout(data) {
      this.$router.push({
        name: 'checkout',
        params: { purchaseData: data },
      });
    },
  },

  async created() {
    this.userAuth = JSON.parse(localStorage.getItem('_speedbids'));
    await this.getPurchases({
      token: this.userAuth.token,
      userId: this.userAuth.userId,
    });

    this.items = this.purchases;
  },
};
</script>

<style>
.pending,
.paid {
  display: block;
  font-weight: bold;
  color: #fff;
  padding: 0;
  width: 80px;
  border-radius: 5px;
  text-align: center;
  padding: 2px 0;
  margin-top: 3px;
}

.pending {
  background: red;
}

.paid {
  background: var(--primaryColor);
}

.info {
  display: flex;
}

.myTable {
  width: 100%;
  margin: 0 auto;
}
</style>