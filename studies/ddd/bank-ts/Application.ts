import { PessoasService } from "./application/services/PessoasServices";
import { ContasRepositoryInMemory } from "./infrastructure/persistence/inmemory/ContasRepositoryInMemory";
import { PessoasRepositoryInMemory } from "./infrastructure/persistence/inmemory/PessoasRepositoryInMemory";

export class Application {
  private repository = {
    pessoas: new PessoasRepositoryInMemory(),
    contas: new ContasRepositoryInMemory(),
  };
  private service = {
    pessoas: new PessoasService(this.repository.pessoas),
  };

  start(): void {
    this.service.pessoas.cadastrarNovaPessoa({
      cpf: "156546456",
      nome: "Matheus",
    });
    const pessoaCadastrada = this.repository.pessoas.buscarPorId("1");
    console.log(pessoaCadastrada);
  }
}
