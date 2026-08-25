# SEO & HTTPS Verification Plan

We will prepare the project for HTTPS verification on your custom domain (`radhvanorigins.com`) by ensuring the correct Google Search Console metadata is present across all pages and updating the deployment configuration to handle secure traffic correctly.

## Proposed Changes

### SEO & Metadata
- Update the `google-site-verification` meta tag in `src/routes/__root.tsx` to include the correct production token.
- Update `index.html` and all static guide pages (`cordycepin.html`, etc.) with the same verification token.
- Ensure all canonical URLs in the static HTML files point to `https://radhvanorigins.com` instead of the preview URL.

### Deployment & Server Config
- Update `.github/workflows/deploy-ftp.yml` to generate a `.htaccess` file that enforces HTTPS (redirecting all HTTP traffic to HTTPS).
- Add a rule to the `.htaccess` to handle the `www` to non-`www` redirect (or vice versa) to prevent duplicate content issues.

### Verification
- Once you deploy these changes to your host, I will trigger the Google Search Console verification for the `https://radhvanorigins.com` property.

## Technical Details

### .htaccess Updates
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Enforce HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Existing rules for clean URLs and SPA fallback...
</IfModule>
```

### Verification Token
I will use the token provided in the codebase (`ZJ9x0ABTBjkcgpNhF5P6rKOb1jltgmOlXN9704VAsxk`) which is already present but may need verification against your Search Console account.

## User Action Required
1. **Enable SSL/AutoSSL**: Please ensure "AutoSSL" or "Let's Encrypt" is enabled in your cPanel. This is required before the HTTPS redirect can work.
2. **Deploy**: After I apply these changes, you will need to push the code to GitHub to trigger the FTP deployment to `radhvanorigins.com`.
