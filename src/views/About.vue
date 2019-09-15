<template>
  <div>
    <div class="about">
      <h1>{{collection.common.title}}の勝ち!</h1>
      <p>{{collection}}</p>
    </div>

    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default{
  name: 'about',
  methods: {
  },
  created() {
    fetch(encodeURI(`https://jpsearch.go.jp/api/item/cobas-38057`))
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