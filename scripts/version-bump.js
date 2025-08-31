/**
 * 버전 업데이트 스크립트
 *
 * 사용법:
 * - 패치 버전 업데이트: node scripts/version-bump.js patch
 * - 마이너 버전 업데이트: node scripts/version-bump.js minor
 * - 메이저 버전 업데이트: node scripts/version-bump.js major
 */

const fs = require("fs");
const path = require("path");

// 루트 package.json과 CLI package.json 경로
const rootPackagePath = path.join(__dirname, "..", "package.json");
const cliPackagePath = path.join(
  __dirname,
  "..",
  "create-expo-next-monorepo",
  "package.json"
);

// 버전 타입 (patch, minor, major)
const versionType = process.argv[2];

if (!["patch", "minor", "major"].includes(versionType)) {
  console.error(
    'Error: Version type must be one of "patch", "minor", or "major"'
  );
  process.exit(1);
}

// package.json 파일 읽기
const rootPackage = JSON.parse(fs.readFileSync(rootPackagePath, "utf8"));
const cliPackage = JSON.parse(fs.readFileSync(cliPackagePath, "utf8"));

// 현재 버전 파싱
const currentVersion = rootPackage.version;
const [major, minor, patch] = currentVersion.split(".").map(Number);

// 새 버전 계산
let newVersion;
if (versionType === "patch") {
  newVersion = `${major}.${minor}.${patch + 1}`;
} else if (versionType === "minor") {
  newVersion = `${major}.${minor + 1}.0`;
} else if (versionType === "major") {
  newVersion = `${major + 1}.0.0`;
}

console.log(`Updating version from ${currentVersion} to ${newVersion}`);

// 루트 package.json 업데이트
rootPackage.version = newVersion;
fs.writeFileSync(rootPackagePath, JSON.stringify(rootPackage, null, 2) + "\n");

// CLI package.json 업데이트
cliPackage.version = newVersion;
fs.writeFileSync(cliPackagePath, JSON.stringify(cliPackage, null, 2) + "\n");

console.log("✅ Version updated successfully in both package.json files!");
console.log("\nNext steps:");
console.log("1. Commit these changes");
console.log("2. Create a PR and merge to main");
console.log(
  "3. GitHub Actions will automatically publish the new version to NPM"
);
