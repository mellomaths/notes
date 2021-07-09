export class Transacao {
  readonly tipo: string;
  readonly valor: number;
  readonly descricao: string;
  readonly data: Date;

  constructor(tipo: string, valor: number) {
    this.tipo = tipo;
    this.valor = valor;
    this.descricao = "";
    this.data = new Date();
  }

  static Tipos = {
    SAQUE: "SAQUE",
    DEPOSITO: "DEPOSITO",
    TRANSFERENCIA_REALIZADA: "TRANSFERENCIA_REALIZADA",
    TRANSFERENCIA_RECEBIDA: "TRANSFERENCIA_RECEBIDA",
  };
}
