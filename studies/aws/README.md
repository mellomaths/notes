# AWS Certified Developer Associate

## IAM

### Summary

- Users: mapped to a physical user; has a password for AWS Console.
- Groups: contains users only.
- Policies: JSON document that defines a set of permissions for making requests to AWS services, and can be used by IAM Users, User Groups, and IAM Roles.
- Roles: for EC2 instances or AWS services. An IAM entity that defines a set of permissions for making requests to AWS services, and will be used by an AWS service.
- Security: MFA + Password Policy.
- Access Keys: access AWS using CLI or SDK.
- Audit: IAM Credential Reports & IAM Access Advisor.

### Guidelines & Best Practices

- Don't use the root account except for the AWS account setup.
- One physical user = One AWS user.
- Assign users to groups and assign permissions to groups.
- Create a strong password policy.
- Use and enforce the use of Multi-Factor Authentication (MFA).
- Create and use Roles for giving permissions to AWS services.
- Use Access Keys for Programmatic Access (CLI/SDK).
- Audit permissions of your account with the IAM Credentials Report.
- Never Share IAM users & Access Keys.
