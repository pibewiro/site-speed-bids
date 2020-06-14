<template>
  <b-modal 
    :id="`modalAllUsers${userData._id}`"
    size="xl"
    :title="`Dados de ${userData.firstname} ${userData.lastname}`"
    centered
  >
      <div>
          <div class="all-user-form row">
              <div class="form-group col-4">
                    <label for="">Primeiro Nome</label>
                    <input :type="text" v-model="firstname" class="form-control">
              </div>

             <div class="form-group col-4">
                    <label for="">Sobre Nome</label>
                    <input :type="text" v-model="lastname" class="form-control">
              </div>

                <div class="form-group col-4">
                    <label for="">Usuário</label>
                    <input :type="text" v-model="username" class="form-control">
              </div>

                <div class="form-group col-4">
                    <label for="">Email</label>
                    <input :type="text" v-model="email" class="form-control">
              </div>

                <div class="form-group col-4">
                    <label for="">CPF</label>
                    <input :type="text" v-model="cpf" class="form-control">
              </div>

              <div class="col-12 row">
                <div class="form-group col-4">
                    <label for="">Cidade</label>
                    <input :type="text" v-model="city" class="form-control">
                </div>

                <div class="form-group col-4">
                    <label for="">Estado</label>
                    <input :type="text" v-model="state" class="form-control">
                </div>

                <div class="form-group col-4">
                    <label for="">País</label>
                    <input :type="text" v-model="country" class="form-control">
              </div>
              </div>
          </div>
      </div>

    <template v-slot:modal-footer>
        <button  class="site-btn btn mr-3">Cancelar</button>
        <button  class="btn btn-outline-danger mr-3">Diabilitar Usuário</button>
        <button @click="handleUser" class="site-btn btn">Salvar</button>
    </template>
  </b-modal>
</template>

<script>
export default {
        props:['userData'],
    data:()=>({
        firstname:null,
        lastname:null,
        username:null,
        email:null,
        cpf:null,
        city:null,
        state:null,
        country:null,
    }),

    methods:{
        handleUser(){
            alert(this.firstname)
        }
    },

    async created(){
        this.firstname = this.userData.firstname
        this.username = this.userData.username
        this.lastname = this.userData.lastname
        this.email = this.userData.email
        this.cpf = this.userData.cpf
        this.city = this.userData.address.city
        this.state = this.userData.address.state
        this.country = this.userData.address.country
    },


}
</script>

<style>

</style>