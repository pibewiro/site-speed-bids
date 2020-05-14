<template>
  <b-modal
    :id="`productImageModal${id}`"
    size="xl"
    :title="'Images'"
    centered
  >
    <div class="productSlider">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        controls
        :interval="0"
      >
        <b-carousel-slide
          v-for="(image, i) in images"
          :key="i"
        >
          <template v-slot:img>
            <img :src="`${imageUrl}/${image}`" />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ProductModal',
  data: () => ({
    imageUrl: null,
  }),
  props: ['id', 'images', 'defaultImage'],
  created() {
    this.imageUrl = process.env.VUE_APP_API_IMAGES;
  },
};
</script>

<style>
.productSlider img {
  width: 100%;
  height: 500px;
}
</style>