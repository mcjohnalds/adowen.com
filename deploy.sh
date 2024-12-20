#!/bin/bash
set -e
STACK_NAME=adowen-website
echo "Creating OpenID Connect provider..."
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1 \
  --client-id-list sts.amazonaws.com || true
echo "Deploying CloudFormation stack..."
aws cloudformation deploy \
    --template-file template.yml \
    --stack-name $STACK_NAME \
    --capabilities CAPABILITY_IAM
BUCKET_NAME=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --query 'Stacks[0].Outputs[?OutputKey==`WebsiteBucket`].OutputValue' \
    --output text)
echo "Uploading index.html to S3"
aws s3 cp index.html "s3://$BUCKET_NAME/"
echo "Deployment complete!"
aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --query 'Stacks[0].Outputs' \
    --output text