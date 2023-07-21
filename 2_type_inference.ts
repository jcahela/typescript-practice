/*

When declaring a variable with an initial value, the variable can never be reassigned a value of a different data type--this is called TYPE INFERENCE

Type Inference - everywhere in our program, TypeScript expects the data type of the variable to match the type of the value initially assigned to it at declaration

TypeScript recognizes JavaScript's built-in "primitive" data types:
  - boolean
  - number
  - undefined
  - null
  - string

If we try to reassign a variable to a different type, TypeScript surfaces an error

*/

// Error

let myName = "Jason";

myName = 5; // Type 'number' is not assignable to type 'string'.
