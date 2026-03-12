export default class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }


    nomeIdade(){
        console.log(`Nome: ${this.nome} Idade: ${this.idade}`)
    }
}