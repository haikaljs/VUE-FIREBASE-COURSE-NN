<template>
 <h1>{{ title }}</h1>
 <input type="text" ref="name">
 <button @click="handleClick">Click me</button>
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
    
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
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
