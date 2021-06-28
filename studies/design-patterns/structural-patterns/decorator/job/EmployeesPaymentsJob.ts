import { Job } from "./Job";

export class EmployeesPaymentsJob extends Job {
  execute(): void {
    console.log("Releasing payments for all employees in the company.");
  }
}
