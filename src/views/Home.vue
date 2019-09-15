<template>
  <div class="home">
    <Logo msg="収蔵品バトラー"/>
    <audio autoplay loop>
      <source src="../assets/b8d_toys.mp3">
  あなたのブラウザーは <code>audio</code> 要素をサポートしていません。
    </audio>
    <div class="parent_flex">
    <div class="first_container">
      <!-- <TextInput title_text="検索キーワード" search_text="search_text"/> -->
      <p class="player">Player A</p>
      <input class="search_form" v-model="first_search_text" placeholder="検索ワードを入力してください">
      <!-- <p>title_text is: {{ title_text }}</p> -->
      <!-- <SearchButton text="検索する"/> -->
      <button class="search_button" v-on:click="fetchCollections('first')">検索する</button>
      <ul id="v-for-object" class="demo">
        <li v-for="value in first_collections">
          <input :id="value.id" type="radio" name="rate" :value="value" v-model="first_picked">
            <label :for="value.id">
            <BattlerIconSet :url="value.common.thumbnailUrl" :icon_title="value.common.title" />
            </label>
        </li>
      </ul>
    </div>
    <p class="vs">VS</p>
    <div class="second_container">
      <!-- <TextInput title_text="検索キーワード" search_text="search_text"/> -->

      <p class="player">Player B</p>
      <input class="search_form" v-model="second_search_text" placeholder="検索ワードを入力してください">
      <!-- <p>title_text is: {{ title_text }}</p> -->
      <!-- <SearchButton text="検索する"/> -->
      <button class="search_button" v-on:click="fetchCollections('second')">検索する</button>
      <ul id="v-for-object" class="demo">
        <li v-for="value in second_collections">
          <input :id="value.id" type="radio" name="rate" :value="value" v-model="second_picked">
            <label :for="value.id">
            <BattlerIconSet :url="value.common.thumbnailUrl" :icon_title="value.common.title" />
            </label>
        </li>
      </ul>
    </div>
    </div>
    <Button @click="gotoAbout">戦闘開始</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import TextInput from '@/components/TextInput.vue'
import ButtonGreen from '@/components/ButtonGreen.vue'
import SearchButton from '@/components/SearchButton.vue'
import BattlerIconSet from '@/components/BattlerIconSet.vue'
import logic from '../helper/logic.js'
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
    gotoAbout: function() {
      logic(this.first_picked, this.second_picked, (a, b, c) => {
       this.$router.push(`/about?${c}`)
      });
    }
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
  .parent-frex {
    display: flex;
  }
  body {
    margin: 0;
    padding: 2rem;
  }
  .vs {
    font-size: 50px;
    margin: 0;
    font-family: STIXGeneral-BoldItalic;
  }
  .player {
    width: 420px;
    text-align: left;
    font-size: 24px;
    font-weight: bold;
    margin: 20px auto 0;
    font-family: STIXGeneral-BoldItalic;
  }
  .search_form {
    width: 300px;
    height: 30px;
    border-radius: 10px;
    padding-left: 10px;
  }
  .search_button {
    width: 100px;
    height: 35px;
    border-radius: 10px;
    background: #e64f04;
    color: #fff;
    font-size: 16px;
    margin-left: 10px;
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
