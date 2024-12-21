# adowen.com

## Dependencies

- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS CloudFormation Linter](https://github.com/aws-cloudformation/cfn-lint)

## Lint

```bash
cfn-lint
```

## Bootstrap

Run this once manually in prod then let CI handle deployments.

```bash
export AWS_PROFILE=...
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1 \
  --client-id-list sts.amazonaws.com
./deploy.sh
```

## Deploy

```bash
export AWS_PROFILE=...
./deploy.sh
```
