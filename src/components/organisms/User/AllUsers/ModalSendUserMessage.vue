<template>
  <b-modal
    :id="`modalSendUserMessage${recieverId}`"
    centered
    size="lg"
    :title="`Mandar mensagem para ${fullname}`"
  >
    <div class="user-message-area">
      <textarea v-model="message" class="form-control" cols="30" rows="20"></textarea>
    </div>

    <template v-slot:modal-footer>
      <button class="site-btn btn">Cancelar</button>
      <button class="site-btn btn">Mandar</button>
    </template>
  </b-modal>
</template>

<script>
export default {
    props:['recieverId', 'fullname'],
    data:()=>({
      message:null
    })
}
</script>

<style>

</style>