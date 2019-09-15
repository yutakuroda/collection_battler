<template>
  <div>
    <div class="about">
      <h1>Aの勝ち!</h1>
    </div>

    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default{
  name: 'about',
  methods: {
    fetchOne: function(){
      const query = location.search
      fetch(encodeURI(`https://jpsearch.go.jp/api/item/search/jps-cross${query}`))
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
    }
  },
  data() {
    return {
      collection: {},
    }
  }
}
</script>