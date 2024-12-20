# adowen.com

## Dependencies

- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS CloudFormation Linter](https://github.com/aws-cloudformation/cfn-lint)

## Lint

```bash
cfn-lint
```

## Deploy

Do this once manually in prod to set up the stack then let CI handle future updates.

```bash
export AWS_PROFILE=...
./deploy.sh
```
