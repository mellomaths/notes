import { Conta } from "../../../domain/contas/Conta";
import { IContasRepository } from "../../../domain/repositories/ContasRepository";

export class ContasRepositoryInMemory implements IContasRepository {
  private readonly contas: Map<string, Conta> = new Map();
  private currentId: number = 0;

  salvarConta(conta: Conta): void {
    this.currentId++;

    this.contas.set(this.currentId.toString(), conta);
  }
  buscaContaPorId(id: string): Conta {
    const conta = this.contas.get(id);
    if (!conta) {
      throw new Error(`Not Found: Conta com id=${id} não encontrada.`);
    }

    return conta;
  }
}
