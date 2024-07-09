new Vue({
    el: '#desafio',
    data:{
        nome: 'Fabio',
        idade: 45,
        imagem: 'https://media.istockphoto.com/id/171572484/photo/verona-during-winter.jpg?s=612x612&w=0&k=20&c=w8-1DfTeyAVLTUZV-9q0_LYtry9LqOfL_tPGHpMhVM0='
    },
    methods:{
        triplicaIdade(){
            return this.idade*3;
        },
        getAleatorio(){
            return Math.random(0,1);
        }
    }
})