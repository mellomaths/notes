import { Pessoa } from "../../../domain/pessoas/Pessoa";
import { IPessoasRepository } from "../../../domain/repositories/PessoasRepository";

export class PessoasRepositoryInMemory implements IPessoasRepository {
  private readonly pessoas: Map<string, Pessoa> = new Map();
  private currentId: number = 0;

  salvarPessoa(pessoa: Pessoa): void {
    this.currentId++;

    this.pessoas.set(this.currentId.toString(), pessoa);
  }

  buscarPorId(id: string): Pessoa {
    const pessoa = this.pessoas.get(id);
    if (!pessoa) {
      throw new Error(`Not Found: Pessoa com id=${id} não foi encontrada.`);
    }

    return pessoa;
  }
}
