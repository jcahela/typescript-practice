/*

JavaScript functions don't require any specific types for arguments, even when we have types in mind.
Catching these errors with typeof can become cumberson.
TypeScript fixes this.

In TypeScript, function parameters may be given type annotations, with the same syntax as variable declarations (: type)

Parameters not given a type annotation are assumed to be type 'any'

*/
function greet(name) {
    console.log(`Hello, ${name}`);
}
greet(4); // Argument of type 'number' is not assignable to parameter of type 'string'.
greet(); // Expected 1 arguments, but got 0.
