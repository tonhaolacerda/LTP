export default class Produto {
  nome;
  preco;

  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  estaCaro() {
    return this.preco > 100;
  }
}
