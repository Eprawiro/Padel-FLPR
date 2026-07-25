FLPR GITHUB MOBILE BOOTSTRAP
================================

FIRST INSTALLATION — upload these 5 files to the MAIN/ROOT folder of GitHub:
1. FLPR_RELEASE.zip
2. deploy.js
3. package.json
4. netlify.toml
5. README_UPLOAD.txt

Do not extract FLPR_RELEASE.zip inside GitHub.

The Netlify build will automatically:
- install the ZIP extractor
- extract FLPR_RELEASE.zip into dist/
- preserve all FLPR subfolders
- publish the website
- activate the Americano importer function

NETLIFY SETTINGS
Base directory: leave empty
Build command: npm run build
Publish directory: dist
Functions directory: dist/netlify/functions

FUTURE FLPR UPDATES
Only replace FLPR_RELEASE.zip in the GitHub repository.
Do not delete deploy.js, package.json, or netlify.toml.

AFTER DEPLOYMENT, TEST:
https://YOUR-SITE.netlify.app/data/flpr-data.json
https://YOUR-SITE.netlify.app/#home
https://YOUR-SITE.netlify.app/#import
