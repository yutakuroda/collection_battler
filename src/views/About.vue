<template>
  <div>

    <audio autoplay loop>
      <source src="../assets/victory.mp3">
  あなたのブラウザーは <code>audio</code> 要素をサポートしていません。
    </audio>
    <div class="about">
      <Logo class="" />
      <div class="fireback">
      <h1>{{collection.common.title}}の勝ち!</h1>
      </div>
      <WinnerIconSet :icon_title="collection.common.title" :url="collection.common.thumbnailUrl" />
      <p>属性(NDC):{{type}}</p>
      <p>戦闘力:{{power}}</p>
      <!-- <p>{{collection}}</p> -->
    </div>

    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import WinnerIconSet from '@/components/WinnerIconSet.vue'
export default{
  name: 'about',
  components: {
    Logo,
    WinnerIconSet,
  },
  methods: {
  },
  created() {
    const [type, power, id] = location.search.slice(1).split('&')
    const type_table =
    {
      0:"総記",
      1:"哲学",
      2:"歴史",
      3:"社会科学",
      4:"自然科学",
      5:"技術工学",
      6:"産業",
      7:"芸術",
      8:"言語",
      9:"文学",
    };
    this.type = type_table[type];


    this.power = power * 10000
    fetch(encodeURI(`https://jpsearch.go.jp/api/item/${id}`))
    .then( response => {
      return response.json()
    })
    .then( json => {
      console.log(this)
      this.collection = json
    })
    .catch( (err) => {
      this.collection = err
    })
  },
  data() {
    return {
      collection: {},
      type: "",
      power: 0,
    }
  }
}
</script>

<style>
h1 {
  position: relative;
  padding: 5px 5px 5px 42px;
  background: #77c3df;
  font-size: 20px;
  color: white;
  margin-left: -33px;
  line-height: 1.3;
  z-index:-1;
}

h1:before {
  position: absolute;
  content: '';
  left: -2px;
  top: -2px;
  border: none;
  border-left: solid 40px white;
  border-bottom: solid 79px transparent;
  z-index:-2
}

</style>
