export default class Mensageiro {
  remetente;

  constructor(remetente) {
    this.remetente = remetente;
  }

  enviar(destinatario, mensagem) {
    console.log(`De: ${this.remetente}`);
    console.log(`Para: ${destinatario}`);
    console.log(`Mensagem: ${mensagem}`);
  }
}


const mensageiro = new Mensageiro("Ana");


mensageiro.enviar("João", "Olá, tudo bem?");