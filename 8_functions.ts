/*

JavaScript functions don't require any specific types for arguments, even when we have types in mind.
Catching these errors with typeof can become cumberson.
TypeScript fixes this.

In TypeScript, function parameters may be given type annotations, with the same syntax as variable declarations (: type)

Parameters not given a type annotation are assumed to be type 'any'

*/

function greet(name: string) {
  console.log(`Hello, ${name}`);
}

greet(4) // Argument of type 'number' is not assignable to parameter of type 'string'.
greet() // Expected 1 arguments, but got 0.

/*

Optional Parameters:

TypeScript expects functions to be provided a value for all arguments
This isn't always ideal, sometimes parameters are optional

To indicate a parameter is intentionally optional in TypeScript, dd a '?' after its name.
This tells TypeScript that the parameter is allowed to be undefined, and doesn't always have to be provided

*/


function greetAnyone(name?: string) {
  console.log(`Hello,${name || "sir/ma'am"}`)
}


greetAnyone(); // No Error!
