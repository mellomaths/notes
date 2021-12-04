# AWS Certified Developer Associate

# IAM

## Summary

- Users: mapped to a physical user; has a password for AWS Console.
- Groups: contains users only.
- Policies: JSON document that defines a set of permissions for making requests to AWS services, and can be used by IAM Users, User Groups, and IAM Roles.
- Roles: for EC2 instances or AWS services. An IAM entity that defines a set of permissions for making requests to AWS services, and will be used by an AWS service.
- Security: MFA + Password Policy.
- Access Keys: access AWS using CLI or SDK.
- Audit: IAM Credential Reports & IAM Access Advisor.

## Guidelines & Best Practices

- Don't use the root account except for the AWS account setup.
- One physical user = One AWS user.
- Assign users to groups and assign permissions to groups.
- Create a strong password policy.
- Use and enforce the use of Multi-Factor Authentication (MFA).
- Create and use Roles for giving permissions to AWS services.
- Use Access Keys for Programmatic Access (CLI/SDK).
- Audit permissions of your account with the IAM Credentials Report.
- Never Share IAM users & Access Keys.

# EC2

## Instances Purchasing Options

### On-Demand Instances

Pay for what you use:

- Linux or Windows: billing per second, after the first minute.
- All other operating systems: billing per hour.

Has the highest cost but no upfront payment and no long-term commitment.

Recommended for **short-term** and **un-interrupted** workloads, where you can't predict how the application will behave.

### Reserved Instances

75% discount compared to On-Demand.

Reservation period:

- 1 year = +discount
- 3 years = +++discount

Purchasing options:

- no upfront.
- partial upfront, you can get a discount.
- all upfront, you can get an even bigger discount.

You have to reserve a specific instance type, so this option is recommended for steady-usage applications, like Databases.

There are other types of Reserved Instances, like:

- **Convertible Reserved Instances**: can change the EC2 instance type, but the discount is smaller, being only 54%.

- **Scheduled Reserved Instances** (deprecated): launch within time window you reserve. This means you can require a fraction of day/week/month but still with the commitment over 1 to 3 years.

### Spot Instances

Can get a discount of up to 90% compared to On-Demand.

Instances that you can "lose" at any point of time if your max price is less than the current spot price.

Useful for workloads that are resilient to failure, like batch jobs, data analysis, image processing, workloads with a flexible start and end time, or any distributed workloads.

Not suitable for critical jobs or Databases.

### Dedicated Hosts

A physical server with EC2 instance capacity fully dedicated to your use.

Can help you address compliance requirements and reduce costs by allowing you to use you existing server-bound software licenses.

Allocated for your account for a 3-year period reservation.

More expensive.

Useful for software that have complicated licensing model (BYOL - Bring Your Own License), or for companies that have strong regulatory or compliance needs.

Per host billing.

Access to the underlying hardware and more affinity between a host and instance.

### Dedicated Instances

Instances running on hardware dedicated to you.

May share hardware with other instances in same account.

No control over instance placement (can move hardware after Stop/Start).

A soft version of Dedicated Host.

Per instance billing.

## EC2 Instance Storage

### Elastic Block Store (EBS)

A network drive you can attach to instances while they run, allowing to persist data, even after their termination.

Can only be mounter to one instance at a time (at CCP level).

CCP - Certified Cloud Practitioner.

They are bound to specific availability zone. An EBS Volume in us-east-1a cannot be attached to us-east-1b. To move the volume across, you need to snapshot it.

Free tier is 30GB of EBS storage of type General Purpose (SSD) or Magnetic per month.

It uses the network to communicate the instance, which means there might be a bit of latency, but in the order hand, it can be detached from an instance and attached to another one quickly.

It is possible to attach 2 or more EBS Volumes to a single EC2 Instance.

EBS Volumes can be attached on-demand, meaning that they can be created and be detached until you need to attach.

By default, the root EBS Volume is deleted and any other attached EBS Volume is not deleted. This can be controlled by the AWS Console/CLI.

#### EBS Snapshots

Make a backup (snapshot) of your EBS volume at a point in time, and it is not necessary to detach the volume, but its is recommended.

With snapshots, you can copy data across Availability Zone or Region.
