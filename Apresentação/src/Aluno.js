export default class Aluno {
    nome;
    curso;

    constructor(nome, curso){
        this.nome = nome
        this.curso = curso
    }

    Apresentar(){
        console.log(`Meu nome é ${this.nome} e curso ${this.curso}`)
    }
}