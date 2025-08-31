/**
 * Version Update Script
 *
 * Usage:
 * - Patch version update: node scripts/version-bump.js patch
 * - Minor version update: node scripts/version-bump.js minor
 * - Major version update: node scripts/version-bump.js major
 */

const fs = require("fs");
const path = require("path");

// Root package.json and CLI package.json paths
const rootPackagePath = path.join(__dirname, "..", "package.json");
const cliPackagePath = path.join(
  __dirname,
  "..",
  "create-expo-next-monorepo",
  "package.json"
);

// Version type (patch, minor, major)
const versionType = process.argv[2];

if (!["patch", "minor", "major"].includes(versionType)) {
  console.error(
    'Error: Version type must be one of "patch", "minor", or "major"'
  );
  process.exit(1);
}

// Read package.json files
const rootPackage = JSON.parse(fs.readFileSync(rootPackagePath, "utf8"));
const cliPackage = JSON.parse(fs.readFileSync(cliPackagePath, "utf8"));

// Parse current version
const currentVersion = rootPackage.version;
const [major, minor, patch] = currentVersion.split(".").map(Number);

// Calculate new version
let newVersion;
if (versionType === "patch") {
  newVersion = `${major}.${minor}.${patch + 1}`;
} else if (versionType === "minor") {
  newVersion = `${major}.${minor + 1}.0`;
} else if (versionType === "major") {
  newVersion = `${major + 1}.0.0`;
}

console.log(`Updating version from ${currentVersion} to ${newVersion}`);

// Update root package.json
rootPackage.version = newVersion;
fs.writeFileSync(rootPackagePath, JSON.stringify(rootPackage, null, 2) + "\n");

// Update CLI package.json
cliPackage.version = newVersion;
fs.writeFileSync(cliPackagePath, JSON.stringify(cliPackage, null, 2) + "\n");

console.log("✅ Version updated successfully in both package.json files!");
console.log("\nNext steps:");
console.log("1. Commit these changes");
console.log("2. Create a PR and merge to main");
console.log(
  "3. GitHub Actions will automatically publish the new version to NPM"
);
