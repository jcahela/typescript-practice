/*

Inferring Return Types

*/
/*

TypeScript can also infer the types of values returned by functions. It does this by looking at the types of values after a function's return statements

*/
// ex.
function createGreeting(name) {
    return `Hello, ${name}!`;
}
const myGreeting = createGreeting('Aisle Nevertell');
/*

TypeScript infers myGreeting to be of type 'string' because:
  1. createGreeting()'s return statement is followed by a 'string' variable, so createGreeting is inferred to return string
  2. createGreeting('Aisle Nevertell') therefore must result in a value of type 'string'
  3. myGreeting is initialized to createGreeting('Aisle Nevertell'), which is a value with the type 'string'

*/
// In the following code, getRandomNumber returns a number, so TypeScript infers that getRandomNumber() when called is a value of type 'number'
// So, myVar gets Type Inferred to be of type 'number', without having to use a type annotation ':'
function getRandomNumber() {
    return Math.random();
}
const myVar = getRandomNumber();
