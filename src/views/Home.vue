<template>
  <div class="home">
    <Logo msg="収蔵品バトラー"/>
    <TextInput title_text="検索キーワード"/>
    <ButtonGreen text="Go!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import TextInput from '@/components/TextInput.vue'
import ButtonGreen from '@/components/ButtonGreen.vue'
export default {
  name: 'home',
  components: {
    Logo,
    TextInput,
    ButtonGreen
  }
}
</script>
