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
      <h1>戦闘力{{power}}</h1>
      </div>
      <div class="winner_img">
      <WinnerIconSet :icon_title="collection.common.title" :url="collection.common.thumbnailUrl" />
      <p class="type">属性(NDC):{{type}}</p>
      </div>
      <!-- <p>{{collection}}</p> -->
    </div>
    <div class="back">
    </div>
    <div class="win_type_img">
      <div v-if="type === '総起'">
        <img src="../assets/souki.jpg"/>
      </div>
      <div v-else-if="type == '哲学'">
        <img src="../assets/tetsugaku.png"/>
      </div>
      <div v-else-if="type == '歴史'">
        <img src="../assets/rekishi.png"/>
      </div>
      <div v-else-if="type == '社会化学'">
        <img src="../assets/syakaikagaku.jpg"/>
      </div>
      <div v-else-if="type == '自然科学'">
        <img src="../assets/shizennkagaku.jpg"/>
      </div>
      <div v-else-if="type == '技術工学'">
        <img src="../assets/gijutu.jpg"/>
      </div>
      <div v-else-if="type == '産業'">
        <img src="../assets/sangyou.jpg"/>
      </div>
      <div v-else-if="type == '芸術'">
        <img src="../assets/geijutsu.png"/>
      </div>
      <div v-else-if="type == '言語'">
        <img src="../assets/gengo.png"/>
      </div>
      <div v-else-if="type == '文学'">
        <img src="../assets/bungaku.png"/>
      </div>
      <div v-else>
        該当するtypeがありません
      </div>
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
.back {
  margin-top: 20px;
}
.winner_img img {
  width: 600px;
  height: 600px;
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
.power {
    border-bottom: 3px solid #ff3333;
    font-size: 200%;
    text-align: center;
}
.win_type_img img {
  width: 300px;
  height: 300px;
}
</style>
