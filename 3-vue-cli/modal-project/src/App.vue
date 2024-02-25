<template>
 <h1>{{ title }}</h1>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data(){
    return {
      title: 'My first app'
    }
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin-top: 60px;
}
h1{
  color: white;
  background: pink;
}
</style>
