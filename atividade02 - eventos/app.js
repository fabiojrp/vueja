new Vue({
    el: '#desafio',
    data: {
        valor: 'valor'
    },
    methods:{
        alertar(){
            alert('Alerta!')
        },
        alterarEnter(event){
            this.valor = event.target.value
        }
    }
})