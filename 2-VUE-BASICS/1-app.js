const app = Vue.createApp({
    // data, functions
    // template: '<h2>Hi Haikal, you want to learn Vuejs</h2>'
    data(){
        return {
            showBooks: false,
            title: 'The Haikal Cendol',
            author: 'Haikal Rozhan',
            age: 32
        }
    },
    methods: {
        changeTitle(abc){
            //  this.title = 'Haikal best Cendol'
            this.title = abc
        },
        toggleShowBooks(){
             this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e.type);
        }


    }
})

app.mount('#app ')  