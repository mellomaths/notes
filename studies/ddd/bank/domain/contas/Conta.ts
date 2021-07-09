import { Extrato } from "./Extrato";
import { Transacao } from "./Transacao";

export class Conta {
  private saldo: number;
  readonly extrato: Extrato;

  constructor(saldoInicial: number = 0) {
    console.log(`Criando conta com saldo inicial R$ ${saldoInicial}.`);
    this.saldo = saldoInicial;
    this.extrato = new Extrato();
  }

  obterSaldo(): number {
    return this.saldo;
  }

  depositar(valor: number): void {
    this.saldo += valor;
    const deposito = new Transacao(Transacao.Tipos.DEPOSITO, valor);
    this.extrato.adiciona(deposito);
  }

  sacar(valor: number): void {
    this.saldo -= valor;
    const saque = new Transacao(Transacao.Tipos.SAQUE, valor);
    this.extrato.adiciona(saque);
  }

  transferir(valor: number): void {
    this.saldo -= valor;
    const transferencia = new Transacao(
      Transacao.Tipos.TRANSFERENCIA_REALIZADA,
      valor
    );
    this.extrato.adiciona(transferencia);
  }

  receberTransferencia(valor: number): void {
    this.saldo += valor;
    const transferencia = new Transacao(
      Transacao.Tipos.TRANSFERENCIA_RECEBIDA,
      valor
    );
    this.extrato.adiciona(transferencia);
  }
}
