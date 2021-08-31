import { UnauthorizedBusinessTransaction } from "../Exception/UnauthorizedBusinessTransaction";
import { User } from "../User/User";
import { Business } from "./Business";

export class SecurityBusiness implements Business {
  private readonly business: Business;
  private readonly user: User;

  constructor(business: Business, user: User) {
    this.business = business;
    this.user = user;
  }

  executeTransaction(): void {
    if (!this.user.hasPermission("Business", "executeTransaction")) {
      throw new UnauthorizedBusinessTransaction(
        `User ${this.user.name()} doesn't have business permission to execute transactions.`
      );
    }

    this.business.executeTransaction();
  }
  cancelTransaction(): void {
    if (!this.user.hasPermission("Business", "cancelTransaction")) {
      throw new UnauthorizedBusinessTransaction(
        `User ${this.user.name()} doesn't have business permission to cancel transactions.`
      );
    }

    this.business.cancelTransaction();
  }
}
