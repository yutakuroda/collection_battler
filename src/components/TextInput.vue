<template>
  <div class="text_input">
  <p class="title_text">{{ title_text }}</p>
  <input class="input" type="text">
  <p class="attention_text">{{ attention_text}}</p>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    title_text: String,
    attention_text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text_input {
  width: 90%;
  text-align: left;
  margin: auto;
}
.title_text {
  margin-bottom: 1px;
  font-size: 12px;
}

.attention_text {
  margin-top: 1px;
  font-size: 12px;
}
.input {
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: solid 1px #555555;
}

</style>
