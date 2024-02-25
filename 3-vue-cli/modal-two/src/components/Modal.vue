<script>
export default{
    props: ['header', 'text','theme'],
    data(){
    return{
        title: 'Modal Title'
    }
}
}

</script>

<template>
<div class="backdrop">
    <div class="modal" :class="{sale : theme === 'sale'}">
        <h1>{{header}}</h1>
        <p class="modal-content">{{text}}</p>
    </div>
</div>
</template>

<style scoped>
.backdrop{
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