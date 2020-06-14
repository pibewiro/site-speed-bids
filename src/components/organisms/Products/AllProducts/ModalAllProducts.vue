<template>
  <b-modal 
    :id="`modalAllProducts${productData._id}`"
    size="xl"
    centered
    :title="`Datalhes do Produto ${productData.productName}`"
  >
      <p>{{productData}}</p>
  </b-modal>
</template>

<script>
export default {
    props:['productData']
}
</script>

<style>

</style>