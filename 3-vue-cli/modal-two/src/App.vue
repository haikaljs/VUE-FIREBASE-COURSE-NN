<script>
import Modal from "./components/Modal.vue"

export default {
    name: 'App',
    components: {Modal},

    data(){
      return{
        title: 'My first vue',
        header: "Sign up for the giveaway",
        text: "Text description"

      }
    }
}
</script>

<template>
 
<Modal :header="header" :text="text" theme="sale"/>

</template>

<style>
*{
  margin: 0;
  padding: 0;
}

</style>
