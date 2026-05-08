import { expect, test, describe } from "bun:test";
import datr from "./module.mjs";

describe("datr", () => {
  test("no arguments returns 8 digits", () => {
    const result = datr();
    expect(result).toMatch(/^\d{8}$/);
  });

  test("precision: 'day' returns 8 digits", () => {
    const result = datr({ precision: 'day' });
    expect(result).toMatch(/^\d{8}$/);
  });

  test("precision: 'seconds' returns 14 digits", () => {
    const result = datr({ precision: 'seconds' });
    expect(result).toMatch(/^\d{14}$/);
  });

  test("precision: 'ms' returns 17 digits", () => {
    const result = datr({ precision: 'ms' });
    expect(result).toMatch(/^\d{17}$/);
  });

  test("separator with 'seconds' works", () => {
    const result = datr({ precision: 'seconds', separator: '-' });
    expect(result).toMatch(/^\d{8}-\d{6}$/);
  });

  test("separator with 'ms' works", () => {
    const result = datr({ precision: 'ms', separator: '.' });
    expect(result).toMatch(/^\d{8}\.\d{6}\.\d{3}$/);
  });

  test("date as Date object works", () => {
    // We check if the result contains the year and month to be timezone-safe
    const date = new Date(2024, 5, 15); // June 15
    const result = datr({ date });
    expect(result).toContain('20240615');
  });

  test("date as ISO string works", () => {
    // 2024-06-15T12:00:00 is safe across many timezones for the date part
    const result = datr({ date: '2024-06-15T12:00:00' });
    expect(result).toContain('20240615');
  });

  test("date as timestamp works", () => {
    const result = datr({ date: new Date(2024, 5, 15, 12).getTime() });
    expect(result).toContain('20240615');
  });

  test("all options combined works", () => {
    const result = datr({ 
      date: new Date(2024, 5, 15, 12, 34, 56, 789), 
      precision: 'ms', 
      separator: '-' 
    });
    expect(result).toBe('20240615-123456-789');
  });

  test("unknown precision falls back to 'day'", () => {
    const result = datr({ precision: 'invalid' });
    expect(result).toMatch(/^\d{8}$/);
  });

  test("invalid date throws TypeError", () => {
    expect(() => datr({ date: 'not-a-date' })).toThrow(TypeError);
    expect(() => datr({ date: 'not-a-date' })).toThrow(/invalid date value/);
  });

  test("backward compatibility with numeric precision (1)", () => {
    const result = datr({ precision: 1 });
    expect(result).toMatch(/^\d{14}$/);
  });

  test("backward compatibility with numeric precision (2)", () => {
    const result = datr({ precision: 2 });
    expect(result).toMatch(/^\d{17}$/);
  });
});

