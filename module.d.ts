export type DatrPrecision = 'day' | 'seconds' | 'ms';

export interface DatrOptions {
  /** Smallest unit in the output. Defaults to 'day'. */
  precision?: DatrPrecision;
  /** String inserted between blocks. Defaults to ''. */
  separator?: string;
  /** Date to format. Accepts Date, ISO string, or Unix timestamp (ms). Defaults to new Date(). */
  date?: Date | string | number;
}

/**
 * Generates a formatted date string.
 * 
 * @param options - Configuration object for formatting.
 * @returns The formatted date string.
 */
export default function datr(options?: DatrOptions): string;

