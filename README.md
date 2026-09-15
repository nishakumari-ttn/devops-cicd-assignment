# DevOps CI/CD Assignment

Static website deployed to GitHub Pages through GitHub Actions.

## Pipeline

The workflow in `.github/workflows/deploy.yml`:

- validates the required site files on pull requests and pushes to `main`;
- deploys the site to GitHub Pages after validation succeeds on `main`;
- supports manual runs from the GitHub Actions page.

## GitHub Pages setup

In the repository settings, open **Pages** and set **Source** to
**GitHub Actions**. Push the workflow to `main` to trigger the first
deployment.
