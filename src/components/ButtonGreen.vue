<template>
  <button class="button_two_column_green" >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonTwoColumnGreen',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button_two_column_green {
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: #16A6B6;
  color: #ffffff;
  font-size: 16px;
  margin: auto;
}
</style>
