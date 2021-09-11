import { Transacao } from "./Transacao";

export class Extrato {
  private historico: Array<Transacao> = [];

  adiciona(transacao: Transacao) {
    this.historico.push(transacao);
  }

  obter(): Array<Transacao> {
    return this.historico;
  }

  visualizar(): void {
    console.log(this.historico);
  }
}
