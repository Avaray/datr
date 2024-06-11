/**
 * Generates a formatted date string.
 * 
 * @param precision - The level of precision for the formatted date.
 *                    0: Returns "YYYYMMDD".
 *                    1: Returns "YYYYMMDDHHMMSS".
 *                    2: Returns "YYYYMMDDHHMMSSms".
 * @param separator - String to separate blocks and make the output more readable.
 *                    
 * @returns The formatted date string.
 */

export default function datr(
  precision?: number,
  separator?: string
): string;
