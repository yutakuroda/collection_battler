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
  width: 500px;
  height: 100px;
  border-radius: 10px;
  background-color: #e64f04;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  font-family: 'monospace';
  letter-spacing: 20px;

  font-size: 40px;
  margin: auto;
  margin-top: 30px;
}
</style>
