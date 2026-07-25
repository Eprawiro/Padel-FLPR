const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");

const releaseFile = path.join(__dirname, "FLPR_RELEASE.zip");
const outputDir = path.join(__dirname, "dist");

if (!fs.existsSync(releaseFile)) {
  console.error("ERROR: FLPR_RELEASE.zip was not found in the repository root.");
  process.exit(1);
}

if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir, { recursive: true });

const zip = new AdmZip(releaseFile);
zip.extractAllTo(outputDir, true);

const required = [
  "index.html",
  "app.js",
  "styles.css",
  path.join("data", "flpr-data.json")
];

const missing = required.filter(file => !fs.existsSync(path.join(outputDir, file)));
if (missing.length) {
  console.error("ERROR: Release archive is incomplete. Missing:", missing.join(", "));
  process.exit(1);
}

console.log("FLPR release extracted successfully.");
console.log("Publish folder:", outputDir);