import { Job } from "./Job";

export abstract class JobDecorator extends Job {
  protected job: Job;

  constructor(job: Job) {
    super();
    this.job = job;
  }
}
