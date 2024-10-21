const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = require(packageJsonPath);

const [major, minor, patch] = packageJson.version.split('.').map(Number);
packageJson.version = `${major}.${minor}.${patch + 1}`;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

console.log(`Version bumped to ${packageJson.version}`);
