import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";

const BASE_PATH = "/wealthix-advisors";

function run(cmd, args = []) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      stdio: "inherit",
      shell: true,
      env: { ...process.env, BASE_PATH },
    });
    child.on("exit", (code) => {
      if (code === 0) resolve(undefined);
      else reject(new Error(`${cmd} ${args.join(" ")} exited with ${code}`));
    });
  });
}

async function main() {
  console.log(`Simulating CI with BASE_PATH=${BASE_PATH}`);
  await run("npm", ["test", "--silent"]);
  await run("npm", ["run", "build"]);
  // Create .nojekyll like CI
  await mkdir("out", { recursive: true });
  await writeFile("out/.nojekyll", "");
  console.log("Done. Static site in ./out");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
