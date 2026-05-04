import { expect, test, describe } from "bun:test";
import datr from "./module.mjs";

describe("datr", () => {
  test("default precision (0) returns YYYYMMDD", () => {
    const result = datr();
    expect(result).toMatch(/^\d{8}$/);
  });

  test("precision 1 returns YYYYMMDDHHMMSS", () => {
    const result = datr(1);
    expect(result).toMatch(/^\d{14}$/);
  });

  test("precision 2 returns YYYYMMDDHHMMSSmmm", () => {
    const result = datr(2);
    expect(result).toMatch(/^\d{17}$/);
  });

  test("custom separator works for precision 1", () => {
    const result = datr(1, "-");
    // YYYYMMDD-HHMMSS
    expect(result).toMatch(/^\d{8}-\d{6}$/);
  });

  test("custom separator works for precision 2", () => {
    const result = datr(2, ".");
    // YYYYMMDD.HHMMSS.mmm
    expect(result).toMatch(/^\d{8}\.\d{6}\.\d{3}$/);
  });

  test("invalid precision defaults to 0", () => {
    const result = datr("invalid");
    expect(result).toMatch(/^\d{8}$/);
  });
});
