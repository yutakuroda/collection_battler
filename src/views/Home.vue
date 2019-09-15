<template>
  <div class="home">
    <Logo msg="収蔵品バトラー"/>
    <div class="first_container">
      <!-- <TextInput title_text="検索キーワード" search_text="search_text"/> -->
      <input v-model="first_search_text" placeholder="edit me">
      <!-- <p>title_text is: {{ title_text }}</p> -->
      <!-- <SearchButton text="検索する"/> -->
      <button v-on:click="fetchCollections('first')">検索する</button>
      <ul id="v-for-object" class="demo">
        <li v-for="value in first_collections">
          <input :id="value.id" type="radio" name="rate" :value="value" v-model="first_picked">
            <label :for="value.id">
            <BattlerIconSet :url="value.common.thumbnailUrl" :icon_title="value.common.title" />
            </label>
        </li>
      </ul>
      <p>{{first_picked}}</p>
    </div>
    <div class="second_container">
      <!-- <TextInput title_text="検索キーワード" search_text="search_text"/> -->
      <input v-model="second_search_text" placeholder="edit me">
      <!-- <p>title_text is: {{ title_text }}</p> -->
      <!-- <SearchButton text="検索する"/> -->
      <button v-on:click="fetchCollections('second')">検索する</button>
      <ul id="v-for-object" class="demo">
        <li v-for="value in second_collections">
          <input :id="value.id" type="radio" name="rate" :value="value" v-model="second_picked">
            <label :for="value.id">
            <BattlerIconSet :url="value.common.thumbnailUrl" :icon_title="value.common.title" />
            </label>
        </li>
      </ul>
      <p>{{second_picked}}</p>
    </div>
    <router-link to="/about">
      <ButtonGreen text="戦闘開始!"/>
    </router-link>
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
  methods: {
    fetchCollections: function(order){
      if (order === "first") {
        fetch(encodeURI(`https://jpsearch.go.jp/api/item/search/jps-cross?f-contents=thumb&fc-db=-dignl&keyword=${this.first_search_text}`))
        .then( response => {
          return response.json()
        })
        .then( json => {
          console.log(json.list)
          this.first_collections = json.list
        })
        .catch( (err) => {
          this.collections = err
        })
      } else if (order === "second") {
        fetch(encodeURI(`https://jpsearch.go.jp/api/item/search/jps-cross?f-contents=thumb&fc-db=-dignl&keyword=${this.second_search_text}`))
        .then( response => {
          return response.json()
        })
        .then( json => {
          console.log(json.list)
          this.second_collections = json.list
        })
        .catch( (err) => {
          this.collections = err
        })
      }
    },
  },
  data() {
    return {
      first_search_text: "",
      first_collections: {},
      first_picked: "",
      second_search_text: "",
      second_collections: {},
      second_picked: "",
    }
  }
}
</script>
<style>
  body {
    margin: 0;
    padding: 2rem;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:checked + label {
    color: orange;
  }
  ul {
    display: grid;
    list-style: none;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding-left: 0;
    li {
      list-style: none;
      padding: 0.5rem;

    }
  }

</style>
