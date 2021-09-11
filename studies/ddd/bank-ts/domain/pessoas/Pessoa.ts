import { Conta } from "../contas/Conta";

export class Pessoa {
  private conta: Conta | null = null;
  readonly cpf: string;
  readonly nome: string;

  constructor(nome: string, cpf: string) {
    console.log(`Cadastrando ${nome} (cpf=${cpf}).`);
    this.nome = nome;
    this.cpf = cpf;
  }

  criarConta(): Conta {
    console.log(`Criando conta para o ${this.nome} (cpf=${this.cpf}).`);
    this.conta = new Conta();
    return this.conta;
  }

  obterConta(): Conta | null {
    return this.conta;
  }
}
