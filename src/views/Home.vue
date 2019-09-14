<template>
  <div class="home">
    <Logo msg="収蔵品バトラー"/>
    <TextInput title_text="検索キーワード"/>
    <SearchButton text="検索する"/>
    <ButtonGreen text="Go!"/>
    <BattlerIconSet url="https://colbase.nich.go.jp/uploads/collection_item_images/thumbnail/3c044d87c6b4a243aff2b469d72c8495.jpg" icon_title="持統天皇"/>
 </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import TextInput from '@/components/TextInput.vue'
import ButtonGreen from '@/components/ButtonGreen.vue'
import SearchButton from '@/components/SearchButton.vue'
import BattlerIconSet from '@/components/BattlerIconSet.vue'
export default {
  name: 'home',
  components: {
    Logo,
    TextInput,
    ButtonGreen,
    SearchButton,
    BattlerIconSet
  },
}
</script>
