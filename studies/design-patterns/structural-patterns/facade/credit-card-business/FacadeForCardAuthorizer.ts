import { RiskManagement } from "../credit-card-payments-service/RiskManagement";
import { Notifier } from "../credit-card-payments-service/Notifier";
import { Processor } from "../credit-card-payments-service/Processor";
import { Authenticator } from "../credit-card-payments-service/Authenticator";

export class FacadeForCardAuthorizer {
  authorizeCreditCardTransaction(options: { executePreCapture: boolean }) {
    const riskManagement = new RiskManagement();
    const notifier = new Notifier();
    const processor = new Processor();
    const authenticator = new Authenticator();

    authenticator.authenticateSalesPoint();
    riskManagement.evaluateTransactionRisk();
    processor.validateChip();

    if (options.executePreCapture) {
      processor.registerPreCapture();
    }

    processor.confirmTransactionAuthorization();
    notifier.notifyTransaction();
  }
}
