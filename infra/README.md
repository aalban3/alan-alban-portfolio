# Hosting

Set up by hand with the AWS CLI (account `099166177109`, us-east-1). It rarely changes, so there's no Terraform.

| Resource | Name / ID | Notes |
| --- | --- | --- |
| S3 bucket | `alanalban.com` | Private (Block Public Access on). Readable only by the distribution below via OAC. |
| CloudFront distribution | `EYI2H4Z660V7Z` (`dqq1juwzpj659.cloudfront.net`) | Aliases: `alanalban.com`, `www.alanalban.com`, `alan-alban.com`, `www.alan-alban.com`. |
| Origin access control | `E2GAOOKMMV4V5D` (`alanalban-com-s3`) | SigV4, always sign. |
| CloudFront Function | `portfolio-viewer-request` | Source: [`cloudfront-function.js`](cloudfront-function.js). 301s non-canonical hosts to `https://alanalban.com`, serves `index.html` for client routes. |
| ACM certificate | `0acecf99-b860-4964-8789-b47cec3570a5` | Covers all four hostnames. DNS-validated, auto-renews while the CNAMEs stay in Route 53. |
| Route 53 | `alanalban.com` and `alan-alban.com` zones | Apex and `www` A/AAAA aliases to the distribution in both. |
| IAM OIDC provider | `token.actions.githubusercontent.com` | |
| IAM role | `github-portfolio-deploy` | Trusts `repo:aalban3/alan-alban-portfolio:ref:refs/heads/dev` only. Inline policy `deploy-site`: sync to the bucket and invalidate the distribution. |

## Updating the CloudFront Function

```sh
ETAG=$(aws cloudfront describe-function --name portfolio-viewer-request --query ETag --output text)
ETAG=$(aws cloudfront update-function --name portfolio-viewer-request --if-match $ETAG \
  --function-config Comment="Canonical host redirect + SPA routing",Runtime=cloudfront-js-2.0 \
  --function-code fileb://infra/cloudfront-function.js --query ETag --output text)
aws cloudfront publish-function --name portfolio-viewer-request --if-match $ETAG
```

## Adding a page

Client routes (no file extension) are already served `index.html` by the function, so a new route only needs a `<Route>` in `client/app.jsx`.
