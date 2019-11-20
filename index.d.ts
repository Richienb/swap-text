/**
 * Swap characters in a string.
 * @param text The text to transform.
 * @param a The first group of characters to swap with the second.
 * @param b The second group of characters to swap with the first.
 * @example
 * ```
 * const swapText = require("swap-text");
 *
 * swapText("abcdef", "ab", "cd")
 * //=> 'cdabef'
 * ```
*/
declare function swapText(string: string, a: string, b: string): string;

export = swapText;
