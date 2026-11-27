import { defineConfig } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

function findChromiumExecutable(): string | undefined {
  const localAppData = process.env.LOCALAPPDATA;
  if (!localAppData) return undefined;
  const cacheDir = path.join(localAppData, "ms-playwright");
  if (!fs.existsSync(cacheDir)) return undefined;
  const entries = fs
    .readdirSync(cacheDir)
    .filter((d) => d.startsWith("chromium-"))
    .sort()
    .reverse();
  for (const entry of entries) {
    const exe = path.join(cacheDir, entry, "chrome-win64", "chrome.exe");
    if (fs.existsSync(exe)) return exe;
    const exeAlt = path.join(cacheDir, entry, "chrome-win", "chrome.exe");
    if (fs.existsSync(exeAlt)) return exeAlt;
  }
  return undefined;
}

const executablePath = findChromiumExecutable();

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 45_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  workers: 1,
  reporter: [["list"]],
  use: {
    baseURL: "http://127.0.0.1:3000",
    headless: true,
    launchOptions: executablePath ? { executablePath } : undefined,
  },
  webServer: {
    command: "npm run start -- --port 3000 --hostname 127.0.0.1",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
