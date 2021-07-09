import { Pessoa } from "../pessoas/Pessoa";
import { PessoaDto } from "../pessoas/PessoaDto";
import { IPessoasRepository } from "../repositories/PessoasRepository";

export class CadastroDePessoas {
  private readonly pessoasRepository: IPessoasRepository;

  constructor(pessoasRepository: IPessoasRepository) {
    this.pessoasRepository = pessoasRepository;
  }

  executar(pessoaDto: PessoaDto): void {
    const pessoa = new Pessoa(pessoaDto.nome, pessoaDto.cpf);
    this.pessoasRepository.salvarPessoa(pessoa);
  }
}
