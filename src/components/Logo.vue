<template>
  <div class="logo">
    <img alt="logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #16A6B6;
}
.logo {
  margin-bottom: 30px;
  }
</style>
