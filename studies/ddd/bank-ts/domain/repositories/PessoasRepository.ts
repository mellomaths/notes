import { Pessoa } from "../pessoas/Pessoa";

export interface IPessoasRepository {
  salvarPessoa(pessoa: Pessoa): void;
  buscarPorId(id: string): Pessoa;
}
