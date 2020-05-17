<template>
  <div>
    <div
      @click="favorite"
      :id="favd"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Star',
  props: ['fav'],
  data: () => ({
    favd: null,
  }),

  methods: {
    favorite() {
      alert(999);
    },
  },

  created() {
    if (this.fav) {
      this.favd = 'star-five';
    } else {
      this.favd = 'star-five1';
    }
  },
};
</script>

<style>
#star-five {
  margin: 50px 0;
  position: relative;
  display: block;
  color: yellow;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid yellow;
  border-left: 100px solid transparent;
  transform: rotate(35deg);
}
#star-five:before {
  border-bottom: 80px solid yellow;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  position: absolute;
  height: 0;
  width: 0;
  top: -45px;
  left: -65px;
  display: block;
  content: '';
  transform: rotate(-35deg);
}
#star-five:after {
  position: absolute;
  display: block;
  color: yellow;
  top: 3px;
  left: -105px;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid yellow;
  border-left: 100px solid transparent;
  transform: rotate(-70deg);
  content: '';
}

#star-five1 {
  margin: 50px 0;
  position: relative;
  display: block;
  color: green;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid green;
  border-left: 100px solid transparent;
  transform: rotate(35deg);
}
#star-five1:before {
  border-bottom: 80px solid green;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  position: absolute;
  height: 0;
  width: 0;
  top: -45px;
  left: -65px;
  display: block;
  content: '';
  transform: rotate(-35deg);
}
#star-five1:after {
  position: absolute;
  display: block;
  color: green;
  top: 3px;
  left: -105px;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid green;
  border-left: 100px solid transparent;
  transform: rotate(-70deg);
  content: '';
}
</style>