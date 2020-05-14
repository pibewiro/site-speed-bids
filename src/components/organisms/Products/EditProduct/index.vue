<template>
  <div class="editProduct">
    <div class="prdEditForm border">
      <h1 class="text-center">Edit Product</h1>
      <p>{{product}}</p>
      <div class="form-group">
        <label for="">Product Name</label>
        <input
          type="text"
          class="form-control"
          v-model="product.productName"
        >
      </div>

      <div class="form-group">
        <label for="">Price</label>
        <input
          type="text"
          class="form-control"
          v-model="product.price"
        >
      </div>

      <div class="form-group">
        <label for="">Category</label>
        <select
          class="form-control"
          v-model="product.category"
        >
          <option value=""></option>
          <option value="automobiles">Automobiles</option>
          <option value="houses">Houses</option>
          <option value="electronics">Electronics</option>
          <option value="sports">Sports</option>
        </select>
      </div>

      <div class="form-group">
        <label for="">Description</label>
        <textarea
          class="form-control"
          v-model="product.description"
        ></textarea>
      </div>

      <div class="form-group text-center m-0">
        <button
          @click="handleEditProduct"
          class="site-btn btn btn-lg"
        >Enter</button>
      </div>
    </div>

    <div class="editImagesDiv">
      <div
        class="editImagesDiv2"
        :key="i"
      >
        <div class="editImageImg">
          <img
            :src="`${imageUrl}/${product.image.defaultImage}`"
            alt=""
          >
        </div>
        <div class="imageOptions">
          <button
            v-if="!defaultImageFile"
            @click="defaultImageFile = true"
            class="site-btn btn btn-lg"
          >Replace Default Image</button>
          <div v-if="defaultImageFile">
            <input
              type="file"
              @change="defaultFileChange"
            >
            <div>
              <button
                @click="defaultImageFile = false"
                class="site-btn btn btn-lg mt-3"
              >Cancel</button>
              <button
                @click="handleDefaultImg(product.image.defaultImage)"
                class="site-btn btn btn-lg mt-3 ml-3"
              >Enter</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="editImagesDiv2 border"
        v-for="(productImage, i) in product.image.productImages"
        :key="i"
      >
        <div class="editImageImg">
          <img
            :src="`${imageUrl}/${productImage}`"
            alt=""
          >
        </div>
        <div class="imageOptions">
          <span
            class="deleteSpan"
            @click="handleDeleteImg(productImage)"
          >
            <i class="far fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import swal from 'sweetalert2';

export default {
  data: () => ({
    userAuth: null,
    id: null,
    imageUrl: null,
    defaultImageFile: false,
    selectedDefaultFile: null,
    error: {},
  }),

  computed: {
    ...mapFields('Product', ['product']),
  },

  methods: {
    ...mapActions('Product', [
      'getProduct',
      'updateProduct',
      'deleteImage',
      'updateDefaultImg',
    ]),

    defaultFileChange(e) {
      this.selectedDefaultFile = e.target.files[0];
    },

    async handleDefaultImg(image) {
      try {
        await this.updateDefaultImg({
          id: this.product._id,
          token: this.userAuth.token,
          defaultImage: image,
          newDefaultImage: this.selectedDefaultFile,
        });

        this.defaultImageFile = await false;

        await swal.fire('Default Image Updated', '', 'success');
      } catch (err) {
        this.error = err.response.data;
        swal.fire(this.error.image, '', 'warning');
      }
    },

    async handleDeleteImg(imageName) {
      await this.deleteImage({
        id: this.id,
        token: this.userAuth.token,
        imageName,
      });

      await swal
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true,
        })
        .then(async result => {
          if (result.value) {
            await swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success',
            );
            await this.getProduct({ id: this.id, token: this.userAuth.token });
          }
        });
    },

    async handleEditProduct() {
      try {
        await this.updateProduct({
          id: this.product._id,
          token: this.userAuth.token,
        });

        await swal.fire('Product Successively updated', 'Updated', 'success');

        await this.getProduct({ id: this.id, token: this.userAuth.token });
      } catch (err) {
        console.log(err);
      }
    },
  },

  async created() {
    this.userAuth = JSON.parse(localStorage.getItem('_speedbids'));
    this.id = this.$route.params.id;
    await this.getProduct({
      id: this.id,
      token: this.userAuth.token,
      url: this.$route.name,
    });
    this.imageUrl = process.env.VUE_APP_API_IMAGES;
  },
};
</script>

<style>
.prdEditForm {
  margin: 0 auto;
  width: 50%;
  padding: 20px;
}

.editImagesDiv {
  width: 100%;
  /* background: red; */
  margin-top: 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 20%);
  grid-gap: 1em;
}

.editImageImg {
  width: 100%;
  height: 300px;
}

.editImageImg img {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: block;
}

.imageOptions {
  text-align: center;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.editImagesDiv2 {
  padding: 1px;
  border: 1px solid #dee2e6;
}
</style>