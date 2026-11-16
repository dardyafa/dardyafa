DAR DYAFA WEBSITE - GITLAB DEPLOYMENT GUIDE
===========================================
1. Admin Panel URL: https://dardyafa.com/admin
   - Username: admin
   - Password: dardyafa@1234.com
   - To change login anytime: open `js/config.js` and edit `adminAuth`.

2. Adding Your Exact Photos:
   - Place your logo as `assets/images/logo.png` (or upload it directly inside `/admin` -> Logo, Bio & Tabs).
   - Place your photos inside `assets/images/page1/`, `assets/images/page2/`, and `assets/images/page3/` using the exact filenames (or upload directly from `/admin` -> Posts & Menu Items).

3. GitLab Pages Ready:
   - Includes `.gitlab-ci.yml` for automatic static deployment when pushed to your `main` branch.
