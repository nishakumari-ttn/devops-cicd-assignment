# DevOps CI/CD Assignment

Static website deployed to Amazon S3 through GitHub Actions.

## Pipeline

The workflow in `.github/workflows/deploy.yml`:

- validates the required site files on pull requests and pushes to `main`;
- packages `index.html`, `style.css`, and `script.js`;
- deploys the package to S3 after validation succeeds on `main`.

## Why the last run failed

Run [Deploy Website to S3 #1](https://github.com/nishakumari-ttn/devops-cicd-assignment/actions/runs/34958723393) failed at **Configure AWS credentials**:

`Credentials could not be loaded, please check your action inputs`

That means GitHub Actions did not receive AWS keys. Add them as repository secrets before the deploy job can succeed.

## Required GitHub secrets

In the repository: **Settings → Secrets and variables → Actions → New repository secret**

| Secret name | Value |
| --- | --- |
| `AWS_ACCESS_KEY_ID` | IAM access key ID |
| `AWS_SECRET_ACCESS_KEY` | IAM secret access key |

The IAM user needs permission to list and write objects in `s3://my-devops-cicd-assignment-2026-3732` in `ap-south-1`. The bucket must already exist.

Do not commit AWS keys into the repository.
