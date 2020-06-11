<template>
  <div>
    <div class="form-div">
      <div class="formReg p-4 border">
        <h1 class="text-center mb-4">Meu Perfil</h1>
        <div class="userImgDiv text-center">
          <div class="userImg">
            <img
              :src="`${imageUrl}/${user.image}`"
              alt=""
            >
          </div>
          <div
            id="fileInputDiv"
            class="mt-3"
            v-if="this.fileDiv"
          >
            <input
              type="file"
              @change="handleFile"
            />
            <button
              @click="showFileClick()"
              class="site-btn btn btn-lg"
            >Cancel</button>
            <p class="text-danger">{{this.error.image}}</p>
          </div>

          <button
            v-if="!this.fileDiv"
            @click="showFileClick()"
            class="site-btn btn btn-lg mt-3"
          >Alterar Imagen</button>

        </div>
        <div class="logo-div text-center">
        </div>
        <div class="form-row1">
          <div class="form-group regInline">
            <label for="">Primeiro Nome</label>
            <input
              type="text"
              class="form-control"
              v-model="user.firstname"
            >
            <p class="text-danger">{{this.error.firstname}}</p>
          </div>
          <div class="form-group regInline">
            <label for="">Sobenome</label>
            <input
              type="text"
              class="form-control"
              v-model="user.lastname"
            >
            <p class="text-danger">{{this.error.lastname}}</p>
          </div>

          <div class="form-group regInline">
            <label for="">CPF</label>
            <input
              type="text"
              class="form-control"
              v-model="user.cpf"
            >
            <p class="text-danger">{{this.error.cpf}}</p>
          </div>
        </div>

        <div class="form-row1">
          <div class="form-group regInline">
            <label for="">Email</label>
            <input
              type="text"
              class="form-control"
              v-model="user.email"
            >
            <p class="text-danger">{{this.error.email}}</p>
          </div>

          <div class="form-group regInline">
            <label for="">Nome do usuarío</label>
            <input
              type="text"
              class="form-control"
              v-model="user.username"
            >
            <p class="text-danger">{{this.error.username}}</p>
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
            <label for="">Cidade</label>
            <input
              type="text"
              class="form-control"
              v-model="user.address.city"
            >
            <p class="text-danger">{{this.error.city}}</p>
          </div>

          <div class="form-group regInline">
            <label for="">Estado</label>
            <input
              type="text"
              class="form-control"
              v-model="user.address.state"
            >
            <p class="text-danger">{{this.error.state}}</p>
          </div>

          <div class="form-group regInline">
            <label for="">País</label>
            <input
              type="text"
              class="form-control"
              v-model="user.address.country"
            >
            <p class="text-danger">{{this.error.country}}</p>
          </div>
        </div>

        <div class="text-center mt-4 my-profile-btns">
          <button
            class="site-btn btn btn-lg"
            v-b-modal.ModalChangePassword
          >Alterar Senha</button>
          <button
            class="btn btn-outline-danger btn-lg"
            v-b-modal.ModalDeleteAccount
          >Deletar Conta</button>
          <button
            @click="handleEditUser"
            class="site-btn btn btn-lg"
          >Salvar Alterações</button>
        </div>
        <ModalChangePassword :userAuth="userAuth" />
        <ModalDeleteAccount
          :userAuth="userAuth"
          :user="user"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import swal from 'sweetalert2';
import ModalChangePassword from './ModalChangePassword';
import ModalDeleteAccount from './ModalDeleteAccount';

export default {
  computed: {
    ...mapFields('User', ['user']),
  },

  components: {
    ModalChangePassword,
    ModalDeleteAccount,
  },

  data: () => ({
    imageUrl: null,
    fileDiv: false,
    selectedFile: null,
    userAuth: null,
    error: {},
  }),

  methods: {
    ...mapActions('User', ['getUser', 'updateUser']),

    handleFile(e) {
      this.selectedFile = e.target.files[0];
    },

    async handleEditUser() {
      try {
        await this.updateUser({
          id: this.userAuth.userId,
          token: this.userAuth.token,
          selectedFile: this.selectedFile,
        });

        await swal.fire(
          'Successivley updated user information',
          'User Updated!',
          'success',
        );
        this.fileDiv = false;
        await this.getUser({ id: this.$route.params.id });
      } catch (err) {
        this.error = err.response.data;
      }
    },

    showFileClick() {
      this.fileDiv = !this.fileDiv;
    },
  },

  async created() {
    window.scrollTo(0, 0);
    this.userAuth = JSON.parse(localStorage.getItem('_speedbids'));
    await this.getUser({ id: this.userAuth.userId });
    this.imageUrl = process.env.VUE_APP_API_IMAGES;
  },
};
</script>

<style>
.my-profile-btns {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 92%;
  margin: 0 auto;
}
.userImg {
  width: 20%;
  margin: 0 auto;
  height: 200px;
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