export default class ContaBancaria {
  titular;
  saldo;

  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  mostrarSaldo() {
    console.log("Saldo:", this.saldo);
  }
}
