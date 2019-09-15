<template>
  <div class="home">
    <Logo msg="収蔵品バトラー"/>
    <TextInput title_text="検索キーワード"/>
    <SearchButton text="検索する"/>
    <ButtonGreen text="Go!"/>
<<<<<<< Updated upstream
    <BattlerIconSet url="https://colbase.nich.go.jp/uploads/collection_item_images/thumbnail/3c044d87c6b4a243aff2b469d72c8495.jpg" icon_title="持統天皇"/>
=======
    <ul id="v-for-object" class="demo">
      <li v-for="value in collections">
        <input :id="value.id" type="radio" name="rate" value="a">
          <label :for="value.id">
        <!-- {{ value }} -->
          <BattlerIconSet :url="value.common.thumbnailUrl" :icon_title="value.common.title" />
        </label>
        <!-- <p>{{value.common}}</p> -->
        <!-- <BattlerIconSet url="http://dl.ndl.go.jp/titleThumb/info:ndljp/pid/2540649" icon_title="ほげ"/> -->
      </li>
    </ul>

    <!-- <BattlerIconSet icon_title="持統天皇"/> -->
    <!-- <BattlerIconSet url="https://colbase.nich.go.jp/uploads/collection_item_images/thumbnail/3c044d87c6b4a243aff2b469d72c8495.jpg" icon_title="持統天皇"/> -->
>>>>>>> Stashed changes
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
<style>
input[type="radio"]:checked + label {
  background: orange;
  color: blue;
}
input[type="radio"] {
  display: none;
}
</style>
