import ContaBancaria from "./deposito";

const conta = new ContaBancaria("Anthony");

conta.depositar(500);
conta.sacar(200);
conta.mostrarSaldo();