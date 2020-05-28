<template>
  <div>
    <b-modal
      id="ModalDeleteAccount"
      size="lg"
      title="Delete Account"
      centered
    >
      <p class="text-center text-danger">To delete your account please type in your password</p>
      <div class="form-group">
        <label for="">Type Password</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
        />
        <p class="text-danger">{{error.password}}</p>
      </div>

      <template v-slot:modal-footer>
        <button
          @click="closeModal"
          class="btn btn-lg btn-secondary"
        >Cancel</button>
        <button
          @click="handleDeleteUser"
          class="site-btn btn btn-lg"
        >Enter</button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import swal from 'sweetalert2';
export default {
  props: ['userAuth', 'user'],
  name: 'ModalDeleteAccount',
  data: () => ({
    password: null,
    error: {},
  }),

  methods: {
    ...mapActions('Auth', ['deleteUser', 'deleteUserEmail']),

    closeModal() {
      this.$bvModal.hide('ModalDeleteAccount');
    },

    async handleDeleteUser() {
      swal
        .fire({
          title: 'Are you sure?',
          // text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#29303b',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok',
        })
        .then(async result => {
          if (result.value) {
            await this.deleteUser({
              id: this.userAuth.userId,
              token: this.userAuth.token,
              password: this.password,
            });
            await swal.fire(
              'Deleted!',
              'Your profile has been deleted.',
              'success',
            );
            this.password = null;
            this.error = {};
            await this.deleteUserEmail({
              token: this.userAuth.token,
              data: {
                firstname: this.user.firstname,
                lastname: this.user.lastname,
                email: this.user.email,
              },
            });
            await this.closeModal();
            await this.$router.push('/');
            await localStorage.removeItem('_speedbids');
          }
        })
        .catch(err => {
          console.log(err.response.data);
          this.error = err.response.data;
        });
    },
  },
};
</script>

<style>
</style>