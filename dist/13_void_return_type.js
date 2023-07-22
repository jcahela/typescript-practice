/*

Void Return Type

*/
/*

When a function doesn't return anything and just performs a side effect, it is still important to use type annotations to specify what it returns

When a function doesn't return anything, the type it returns is called 'void'.

*/
// ex.
function logGreeting(name) {
    console.log(`Hello, ${name}!`);
}
// It doesn't return an error written like the above, but it's good to know explicitly that it shouldn't return anything, so we add void as an explicit return type on the function:
function logGreeting2(name) {
    console.log(`Hello, ${name}!`);
}
// If you have a function with a declared return type that isn't 'void' or 'any', it must return a value, so the below gets an Error
function wronglogGreeting(name) {
    console.log(`Hello, ${name}`);
}
