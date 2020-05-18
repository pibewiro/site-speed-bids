<template>
  <div class="addProduct">
    <div class="productForm border p-4">
      <h1 class=text-center>Add Product</h1>
      <div class="form-group">
        <label for="">Name</label>
        <input
          type="text"
          class="form-control"
          v-model="form.productName"
        >
        <p class="text-danger">{{this.error.productName}}</p>
      </div>

      <div class="form-group">
        <label for="">Price</label>
        <input
          type="text"
          class="form-control"
          v-model="form.price"
        >
        <p class="text-danger">{{this.error.price}}</p>
      </div>

      <div class="form-group">
        <label for="">Category</label>
        <select
          class="form-control"
          v-model="form.category"
        >
          <option value=""></option>
          <option value="automobiles">Automobiles</option>
          <option value="houses">Houses</option>
          <option value="electronics">Electronics</option>
          <option value="sports">Sports</option>
        </select>
        <p class="text-danger">{{this.error.category}}</p>
      </div>

      <div class="form-group">
        <label for="">Description</label>
        <textarea
          type="text"
          class="form-control"
          v-model="form.description"
        ></textarea>
        <p class="text-danger">{{this.error.description}}</p>
      </div>

      <p class="text-center text-danger mb-0">{{this.error.images}}</p>
      <div class="form-group">
        <label for="">Default Image</label>
        <input
          class="d-block"
          type="file"
          @change="selectImage"
        >
      </div>

      <div
        class="form-group"
        id="moreImages"
      >
        <div
          id="imgDiv"
          class="form-group"
          v-for="i in images"
          :key='i'
        >
          <label
            class="d-block"
            for=""
          >Add Images</label>
          <input
            type="file"
            @change="selectImages"
          >
          <span
            class="addSpan"
            @click="addImage"
          >
            <i class="fas fa-plus"></i>
          </span>
          <span
            class="deleteSpan"
            @click="deleteImage(i)"
          >
            <i class="far fa-trash-alt"></i>
          </span>
        </div>
      </div>
      <div class="form-group text-center mt-5 mb-0">
        <button
          @click="saveProduct"
          class="site-btn btn btn-lg"
        >Enter</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import swal from 'sweetalert2';

export default {
  data() {
    return {
      images: ['image1'],
      form: {
        productName: null,
        price: null,
        category: null,
        description: null,
        user: null,
        image: { defaultImage: null, productImages: [] },
      },
      error: {},
      userAuth: null,
      defaultImage: null,
      productImages: [],
    };
  },

  methods: {
    ...mapActions('Product', ['storeProduct']),

    selectImages(e) {
      this.form.image.productImages.push(e.target.files[0]);
    },

    selectImage(e) {
      this.form.image.defaultImage = e.target.files[0];
    },

    makeid: function(length) {
      var result = '';
      var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength),
        );
      }
      return result;
    },

    addImage() {
      if (this.images.length < 5) {
        this.images.push(this.makeid(4));
      } else {
        alert('Limit');
      }
    },

    deleteImage(i) {
      if (this.images.length > 1) {
        let indx = this.images.indexOf(i);
        this.images = this.images.filter(res => res !== i);
        this.form.image.productImages = this.form.image.productImages.splice(
          indx,
          1,
        );
      }
    },

    async saveProduct() {
      try {
        const obj = {
          data: this.form,
          token: this.userAuth.token,
        };
        await this.storeProduct(obj);
        await swal.fire(
          'Successivley Registered an Product',
          'New Product!',
          'success',
        );
        this.$router.push('/dashboard');
      } catch (err) {
        this.error = err.response.data;
      }
    },
  },

  created() {
    if (!localStorage.getItem('_speedbids')) {
      this.$router.push('/');
    }

    this.userAuth = JSON.parse(localStorage.getItem('_speedbids'));
    this.form.user = this.userAuth.userId;
  },
};
</script>

<style scoped>
.productForm {
  width: 45%;
  margin: 0 auto;
}

.addSpan {
  padding: 10px;
  border-radius: 10%;
  border: 1px solid var(--primaryColor);
  color: var(--primaryColor);
}

.addSpan:hover {
  background: var(--primaryColor);
  cursor: pointer;
  color: #fff;
}

.deleteSpan {
  padding: 10px;
  border-radius: 10%;
  border: 1px solid red;
  color: red;
  margin-left: 10px;
}

.deleteSpan:hover {
  background: red;
  cursor: pointer;
  color: #fff;
}

@media (max-width: 1000px) {
  .productForm {
    width: 100%;
  }

  .menu {
    display: none;
  }
}
</style>