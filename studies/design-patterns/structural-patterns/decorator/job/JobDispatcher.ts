import { Job } from "./Job";
import { SalesReportJob } from "./SalesReportJob";
import { JobWithEmailAlert } from "./JobWithEmailAlert";
import { EmployeesPaymentsJob } from "./EmployeesPaymentsJob";
import { JobWithPushNotification } from "./JobWithPushNotification";

export class JobDispatcher {
  dispatch(): void {
    const jobs = this.getJobsToDispatch();
    jobs.forEach((j) => {
      j.execute();
    });
  }

  protected getJobsToDispatch(): Array<Job> {
    // Settings that came from XML ou database
    const jobs: Array<Job> = [];

    const salesReportJob = new SalesReportJob();
    const emailForSalesReportJob = new JobWithEmailAlert(salesReportJob);
    jobs.push(emailForSalesReportJob);

    const employeesPaymentsJob = new EmployeesPaymentsJob();
    const emailForEmployeesPaymentsJob = new JobWithEmailAlert(
      employeesPaymentsJob
    );
    const pushNotificationForEmployeesPaymentsJobs =
      new JobWithPushNotification(emailForEmployeesPaymentsJob);
    jobs.push(pushNotificationForEmployeesPaymentsJobs);

    return jobs;
  }
}
