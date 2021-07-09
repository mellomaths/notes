import { PessoaDto } from "../../domain/pessoas/PessoaDto";
import { IPessoasRepository } from "../../domain/repositories/PessoasRepository";
import { CadastroDePessoas } from "../../domain/usecases/CadastroDePessoas";

export class PessoasService {
  private readonly pessoaRepository: IPessoasRepository;

  constructor(pessoaRepository: IPessoasRepository) {
    this.pessoaRepository = pessoaRepository;
  }

  cadastrarNovaPessoa(pessoaDto: PessoaDto): void {
    new CadastroDePessoas(this.pessoaRepository).executar(pessoaDto);
  }
}
