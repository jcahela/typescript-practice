/*

Explicit Return Types

*/

/*

If you want to be explicit about what type a function returns, we can add an explicit type annotation after its closing parenthesis.

This is the same syntax as other type annotations, a colon followed by the type.

TypeScript will then produce an error for any return statement in that function that doesn't return the right type of value.

*/

function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }

  return undefined; // Type 'undefined' is not assignable to type 'string'.
}

// The same thing is possible for an arrow function

const createArrowGreeting = (name?: string): string => {
  if (name) {
    return `Hello, ${name}!`;
  }
  
  return undefined; // Type 'undefined' is not assignable to type 'string'.
}
