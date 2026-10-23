# My Portfolio Website

Welcome to my page! This website contains my projects, as well as some other information about me and my experience.

## Tech Stack

- React + React Router, bundled with webpack
- Hosted on S3 + CloudFront at [alanalban.com](https://alanalban.com), DNS on Route 53
- Deployed by GitHub Actions on push to `dev`, using OIDC (no stored AWS keys)

See [infra/README.md](infra/README.md) for the AWS resources.

## Local development

```sh
npm install
npm start   # http://localhost:8000
```
