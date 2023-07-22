/*

Documenting Functions

*/
/*
TypeScript recognizes JavaScript comment syntax (// and /*)

However, it's common in TypeScript to see a third comment style: documentation comments.

A Documentation Comment is denoted with the first line /**, and every line after that usually starts with an asterisk (*)

@param is a special tag that shows the function's parameters
@returns is a special tag that shows what the function returns
*/
// example:
/**
 * Returns the sum of two numbers.
 *
 * @param x - The first input number
 * @param y - The second input number
 * @returns The sum of `x` and `y`
 *
 */
function getSum(x, y) {
    return x + y;
}
