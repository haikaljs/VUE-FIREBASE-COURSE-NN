

<template>
  <h1>Welcome to home page</h1>
 <button @click="toggleModal">Open Modal</button>
 <div v-if="showModal">
  <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
  
 </div>



</template>

<script>
import Modal from "./components/Modal.vue"

export default {
    name: 'App',
    components: {Modal},

    data(){
      return{
        title: 'My first vue',
        header: "Sign up for the giveaway",
        text: "Text description",
        showModal: false

      }
    },
    methods: {
      toggleModal(){
        this.showModal = !this.showModal
      }
    }
    
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

</style>
