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
      <div class="winner_img">
      <WinnerIconSet :icon_title="collection.common.title" :url="collection.common.thumbnailUrl" />
      </div>
      <!-- <p>{{collection}}</p> -->
    </div>
    <div class="back">
      <router-link to="/">Back to Home</router-link>
    </div>
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
    const query = location.search.slice(1)
    console.log(query)
    fetch(encodeURI(`https://jpsearch.go.jp/api/item/${query}`))
    // fetch(encodeURI(`https://jpsearch.go.jp/api/item/cobas-38057`))
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
  margin-top: 200px;
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

</style>
