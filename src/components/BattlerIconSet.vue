<template>
<figure class="battler_icon_set">
  <img class="img" alt="" :src="url" />
  <figcaption class="icon_title">{{ icon_title }}</figcaption>
</figure>
</template>

<script>
export default {
  name: 'BattlerIconzset',
  props: {
    icon_title: String,
    url: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  width: 200px;
  height: 200px;
}
figure {
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .icon_title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
