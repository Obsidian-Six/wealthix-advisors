#!/usr/bin/env node
import { rm, access } from "node:fs/promises";
import { constants } from "node:fs";
import readline from "node:readline";

const targets = [".next", ".swc", "out", "node_modules", "coverage"];

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(question, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const present = [];
  for (const t of targets) {
    if (await exists(t)) present.push(t);
  }
  if (present.length === 0) {
    console.log("Nothing to clean.");
    return;
  }
  console.log("The following will be removed:");
  for (const p of present) console.log(` - ${p}`);
  const ans = (await ask("Proceed? [y/N]: ")).trim().toLowerCase();
  if (ans !== "y" && ans !== "yes") {
    console.log("Aborted.");
    return;
  }
  for (const p of present) {
    try {
      await rm(p, { recursive: true, force: true });
      console.log(`Removed ${p}`);
    } catch (e) {
      console.error(`Failed to remove ${p}:`, e.message || e);
    }
  }
  console.log("Clean complete.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
