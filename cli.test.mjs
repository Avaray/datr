import { expect, test, describe } from "bun:test";
import pkg from "./package.json" with { type: "json" };

const { version } = pkg;

/**
 * Helper to run the CLI and capture its output.
 */
const runCli = async (args) => {

  const proc = Bun.spawn(["bun", "run", "cli.mjs", ...args], {
    stdout: "pipe",
    stderr: "pipe",
  });
  const stdout = await new Response(proc.stdout).text();
  const stderr = await new Response(proc.stderr).text();
  await proc.exited;
  return { stdout, stderr, status: proc.exitCode };
};

describe("CLI", () => {
  test("no arguments returns 8 digits (YYYYMMDD)", async () => {
    const { stdout, status } = await runCli([]);
    expect(status).toBe(0);
    expect(stdout.trim()).toMatch(/^\d{8}$/);
  });

  test("--precision seconds returns 14 digits", async () => {
    const { stdout, status } = await runCli(["--precision", "seconds"]);
    expect(status).toBe(0);
    expect(stdout.trim()).toMatch(/^\d{14}$/);
  });

  test("-p ms -s - returns 17 digits with separators", async () => {
    const { stdout, status } = await runCli(["-p", "ms", "-s", "-"]);
    expect(status).toBe(0);
    expect(stdout.trim()).toMatch(/^\d{8}-\d{6}-\d{3}$/);
  });

  test("--date 2024-06-15 works", async () => {
    const { stdout, status } = await runCli(["--date", "2024-06-15"]);
    expect(status).toBe(0);
    expect(stdout.trim()).toContain("20240615");
  });

  test("-d with short flag works", async () => {
    const { stdout, status } = await runCli(["-d", "2024-06-15"]);
    expect(status).toBe(0);
    expect(stdout.trim()).toContain("20240615");
  });

  test("--version returns current version", async () => {
    const { stdout, status } = await runCli(["--version"]);
    expect(status).toBe(0);
    expect(stdout.trim()).toBe(version);
  });

  test("-v returns current version", async () => {
    const { stdout, status } = await runCli(["-v"]);
    expect(status).toBe(0);
    expect(stdout.trim()).toBe(version);
  });

  test("missing flag value falls back gracefully", async () => {
    const { stdout, status } = await runCli(["--precision"]);
    expect(status).toBe(0);
    expect(stdout.trim()).toMatch(/^\d{8}$/);
  });

  test("--help returns usage instructions", async () => {

    const { stdout, status } = await runCli(["--help"]);
    expect(status).toBe(0);
    expect(stdout).toContain("Usage: datr [options]");
  });

  test("-h returns usage instructions", async () => {
    const { stdout, status } = await runCli(["-h"]);
    expect(status).toBe(0);
    expect(stdout).toContain("Usage: datr [options]");
  });

  test("invalid date input results in exit code 1 and error message", async () => {
    const { stderr, status } = await runCli(["--date", "invalid"]);
    expect(status).toBe(1);
    expect(stderr).toContain("invalid date value");
  });
});
