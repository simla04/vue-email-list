/*
nome repo: vue-email-list
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/
var app = new Vue({
    el: "#app",
    data: {
        emailArray: [],
        emailSingola: ''
    },
    mounted() {

        for(i = 0; i < 10; i++){

            // axios.get-> richiama i dati di una API; in questo caso richiama delle mail autogenerate.
            // .then( () => serve a recuperare correttamente il this)


        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response)=> {
            //variabile singola che verrà trasformata in un array in un secondo momento
            // console.log(response.data)
            let emailSingola = response.data.response
            this.emailArray.push( emailSingola )
            })
        }
    },
    beforeUpdate() {

    },
    methods: {

    }
})