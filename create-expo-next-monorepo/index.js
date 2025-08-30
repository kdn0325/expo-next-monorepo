#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

async function main() {
  console.log(chalk.blue("Welcome to Expo Next Monorepo Template Generator!"));

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter project name:",
      default: "expo-next-monorepo-app",
    },
    {
      type: "list",
      name: "packageManager",
      message: "Select package manager:",
      choices: ["yarn", "npm", "pnpm"],
      default: "yarn",
    },
  ]);

  const { projectName, packageManager } = answers;
  const targetDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    console.error(chalk.red(`Error: Folder ${projectName} already exists.`));
    process.exit(1);
  }

  // Clone template from GitHub
  console.log(chalk.yellow("Downloading template..."));
  execSync(
    `git clone https://github.com/kdn0325/expo-next-monorepo.git ${projectName}`
  );

  // Remove .git folder
  fs.removeSync(path.join(targetDir, ".git"));

  // Modify package.json
  const packageJsonPath = path.join(targetDir, "package.json");
  const packageJson = fs.readJsonSync(packageJsonPath);
  packageJson.name = projectName;
  packageJson.version = "0.1.0";
  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

  console.log(
    chalk.green(`
Project ${projectName} has been successfully created!

Get started with:

  cd ${projectName}
  ${
    packageManager === "yarn"
      ? "yarn install"
      : packageManager === "npm"
      ? "npm install"
      : "pnpm install"
  }

Run development servers:
  ${
    packageManager === "yarn"
      ? "yarn workspace web dev"
      : packageManager === "npm"
      ? "npm run dev -w web"
      : "pnpm --filter web dev"
  }
  ${
    packageManager === "yarn"
      ? "yarn workspace native start"
      : packageManager === "npm"
      ? "npm run start -w native"
      : "pnpm --filter native start"
  }
  `)
  );
}

main().catch((err) => {
  console.error(chalk.red("An error occurred:"), err);
  process.exit(1);
});
