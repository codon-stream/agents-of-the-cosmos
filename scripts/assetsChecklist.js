import { promises } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const directoryPath = path.join(projectRoot, "public");

const expectedFiles = [
  "favicon/favicon.svg",
  "favicon/favicon.ico",
  "/favicon/apple-touch-icon-167x167.png",
  "/favicon/apple-touch-icon-180x180.png",
  "/favicon/apple-touch-icon-152x152.png",
  "/favicon/apple-touch-icon-120x120.png",
];

async function checkFiles() {
  const results = await Promise.all(
    expectedFiles.map(async (file) => {
      const filePath = path.join(directoryPath, file);

      try {
        await promises.access(filePath);

        return { file, exists: true };
      } catch {
        return { file, exists: false };
      }
    })
  );

  console.log("\x1b[42m\x1b[1m assets checklist \x1b[0m\n");

  const existingFiles = results.filter((result) => result.exists);
  const missingFiles = results.filter((result) => !result.exists);

  if (existingFiles.length > 0) {
    existingFiles.forEach((result) =>
      console.log(`\x1b[1m\x1b[32m•\x1b[0m ${result.file}`)
    );
  }

  if (missingFiles.length > 0) {
    missingFiles.forEach((result) =>
      console.log(`\x1b[1m\x1b[31m•\x1b[0m ${result.file}`)
    );
  }

  console.log(" ");
}

checkFiles();
