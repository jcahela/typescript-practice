/*

Variables of type 'any' can be assigned to any value and TypeScript won't give an error if they're reassigned to a different type later on.

When a variable is declared without being assigned an initial value, it gets type 'any'

*/
let age; // Variable 'age' implicitly has an 'any' type, but a better type may be inferred from usage.
age = 5; // No Error
age = '5'; // No Error
