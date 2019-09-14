<template>
  <div class="home">
    <Logo msg="収蔵品バトラー"/>
    <TextInput title_text="検索キーワード"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'home',
  components: {
    Logo,
    TextInput
  }
}
</script>
