# DevOps CI/CD Assignment

Static website deployed to Amazon S3 through GitHub Actions.

## Pipeline

Push to `main` runs `.github/workflows/deploy.yml`:

Test → Build / Package → Deploy to S3

## GitHub secrets

**Settings → Secrets and variables → Actions**

| Secret name | Value |
| --- | --- |
| `AWS_ACCESS_KEY_ID` | IAM access key ID |
| `AWS_SECRET_ACCESS_KEY` | IAM secret access key |

Do not commit AWS keys.

## IAM permission required for deploy

The latest failure happened after AWS login succeeded. `aws s3 sync` could not access the bucket.

In AWS Console:

1. **IAM → Users → github-actions-s3-deploy**
2. **Add permissions → Attach policies directly**
3. Select **AmazonS3FullAccess**
4. Save

Then re-run the GitHub Actions workflow.

## Public website URL

```text
http://my-devops-cicd-assignment-2026-3732.s3-website.ap-south-1.amazonaws.com
```

Enable static website hosting on the bucket with index document `index.html`, and allow public read of objects so the reviewer can open that URL.
