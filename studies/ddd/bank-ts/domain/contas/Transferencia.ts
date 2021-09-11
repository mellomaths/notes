import { Conta } from "./Conta";

export class TransferenciaEntreContas {
  executar(contaDe: Conta, contaPara: Conta, valor: number): void {
    contaDe.transferir(valor);
    contaPara.receberTransferencia(valor);
  }
}
