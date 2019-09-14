<template>
  <div class="battler_icon_set">
    <img class="img" alt="" src="../assets/Jitoutennou.jpg" width="200px" height="200px">
    <span class="icon_title">{{ icon_title }}</span>
  </div>
</template>

<script>
export default {
  name: 'BattlerIconzset',
  props: {
    icon_title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.battler_icon_set {
  width: 200px;
  position: relative;
  }
.btn{
  width: 200px;
  height: 200px;
}
.icon_title {
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #eee;
  }
</style>
