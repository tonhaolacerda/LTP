export default class Contador {
  valor;

  constructor() {
    this.valor = 0;
  }

  incrementar() {
    this.valor += 1;
  }

  mostrar() {
    console.log("Valor:", this.valor);
  }
}