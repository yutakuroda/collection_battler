<template>
<p class="debug_label" v-bind:text="text"></p>
</template>

<script>
export default {
  name: 'DebugLabel',
  props: {
    text: String,
  }
}
</script>