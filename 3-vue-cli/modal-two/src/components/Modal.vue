

<template>
<div class="backdrop" @click="closeModal">
    <div class="modal" :class="{sale : theme === 'sale'}">
        <h1>{{header}}</h1>
        <p class="modal-content">{{text}}</p>
    </div>
</div>
</template>
<script>
export default{
    props: ['header', 'text','theme'],
    data(){
    return{
        title: 'Modal Title'
    }

    },
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
}

</script>

<style scoped>
.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal{
    /* background: white; */
    width: 400px;
    height: 400px;
    padding: 10px;
    background: white;
    text-align: center;
}
.modal.sale{
    background: crimson;
    color: white;
}

</style>