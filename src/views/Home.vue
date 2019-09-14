<template>
  <div class="home">
    <Logo msg="収蔵品バトラー"/>
    <!-- <TextInput title_text="検索キーワード"/> -->
    <input v-model="title_text" placeholder="edit me">
    <!-- <p>title_text is: {{ title_text }}</p> -->
    <!-- <SearchButton text="検索する"/> -->
    <button v-on:click="fetchCollections">検索する</button>
    <!-- <p>{{collections}}</p> -->
    <ButtonGreen text="Go!"/>
    <ul id="v-for-object" class="demo">
      <li v-for="value in collections">
        {{ value }}
      </li>
    </ul>

    <!-- <BattlerIconSet icon_title="持統天皇"/> -->
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
<<<<<<< HEAD
  methods: {
    fetchCollections: function(){
      console.log('run methods');
      fetch(encodeURI(`https://jpsearch.go.jp/api/item/search/jps-cross?keyword=${this.search_text}`))
      .then( response => {
        return response.json()
      })
      .then( json => {
        console.log(json.list)
        this.collections = json.list
      })
      .catch( (err) => {
        this.collections = err
      })
    },
  },
  data() {
    return {
      title_text: "",
      collections: {},
    }
  }
=======
>>>>>>> f415957e76aeedc20af1660e66de4c2daa46ab62
}
</script>
