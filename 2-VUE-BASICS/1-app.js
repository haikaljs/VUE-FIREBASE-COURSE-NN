const app = Vue.createApp({
    // data, functions
    // template: '<h2>Hi Haikal, you want to learn Vuejs</h2>'
    data(){
        return {
            title: 'The Haikal Cendol',
            author: 'Haikal Rozhan',
            age: 32
        }
    },
    methods: {
        changeTitle(abc){
            //  this.title = 'Haikal best Cendol'
            this.title = abc
        }

    }
})

app.mount('#app ')  