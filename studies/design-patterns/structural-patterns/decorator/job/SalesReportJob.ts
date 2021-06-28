import { Job } from "./Job";

export class SalesReportJob extends Job {
  execute(): void {
    console.log("Building Sales Report");
  }
}
