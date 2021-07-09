import { Conta } from "../contas/Conta";

export interface IContasRepository {
  salvarConta(conta: Conta): void;

  buscaContaPorId(id: string): Conta;
}
