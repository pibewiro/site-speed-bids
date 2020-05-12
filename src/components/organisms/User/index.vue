<template>
  <div>
    <div class="form-div">
      <div class="formReg p-4 border">
        <h1 class="text-center mb-4">My Profile</h1>

        <div class="userImgDiv text-center">
          <div class="userImg">
            <img
              :src="`${imageUrl}/default.jpg`"
              alt=""
            >
          </div>
          <div
            id="fileInputDiv"
            class="mt-3"
            v-if="this.fileDiv"
          >
            <input type="file" />
            <button
              @click="showFileClick()"
              class="site-btn btn btn-lg"
            >Cancel</button>
          </div>

          <button
            v-if="!this.fileDiv"
            @click="showFileClick()"
            class="site-btn btn btn-lg mt-3"
          >Change Image</button>

        </div>
        <div class="logo-div text-center">
        </div>
        <div class="form-row1">
          <div class="form-group regInline">
            <label for="">First Name</label>
            <input
              type="text"
              class="form-control"
              v-model="user.firstname"
            >
          </div>
          <div class="form-group regInline">
            <label for="">Last Name</label>
            <input
              type="text"
              class="form-control"
              v-model="user.lastname"
            >
          </div>

          <div class="form-group regInline">
            <label for="">CPF</label>
            <input
              type="text"
              class="form-control"
              v-model="user.cpf"
            >
          </div>
        </div>

        <div class="form-row1">
          <div class="form-group regInline">
            <label for="">Email</label>
            <input
              type="text"
              class="form-control"
              v-model="user.email"
            > </div>

          <div class="form-group regInline">
            <label for="">Username</label>
            <input
              type="text"
              class="form-control"
              v-model="user.username"
            >
          </div>

          <div
            class="form-group regInline"
            style="visibility:hidden"
          >
            <label for="">Invisible</label>
            <input class="form-control">
          </div>
        </div>

        <div class="form-row1">
          <div class="form-group regInline">
            <label for="">City</label>
            <input
              type="text"
              class="form-control"
              v-model="this.user.address.city"
            >
          </div>

          <div class="form-group regInline">
            <label for="">State</label>
            <input
              type="text"
              class="form-control"
              v-model="this.user.address.state"
            >
          </div>

          <div class="form-group regInline">
            <label for="">Country</label>
            <input
              type="text"
              class="form-control"
              v-model="this.user.address.country"
            >
          </div>
        </div>

        <div class="text-center mt-3">
          <button
            @click="updateUserClick"
            class="site-btn btn btn-lg"
          >Enter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
  computed: {
    // ...mapState('User', ['user']),
    ...mapFields('User', ['user']),
  },
  data: () => ({
    imageUrl: null,
    fileDiv: false,
  }),

  methods: {
    ...mapActions('User', ['getUser', 'updateUser']),

    showFileClick() {
      this.fileDiv = !this.fileDiv;
    },

    async updateUserClick() {
      this.updateUser();
    },
  },

  async created() {
    console.log(this.$route.params.id);
    await this.getUser({ id: this.$route.params.id });

    this.imageUrl = process.env.VUE_APP_API_IMAGES;
  },
};
</script>

<style>
.userImg {
  width: 20%;
  margin: 0 auto;
  height: 200px;
  background: blueviolet;
}

.userImg img {
  width: 100%;
  height: 100%;
}

.userImgDiv {
  width: 100%;
  padding-bottom: 20px;
}
</style>