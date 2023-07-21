/*

An object's shape describes what PROPERTIES and METHODS it  does or doesn't contain

TypeScript not only knows JavaScript object types, but object SHAPE as well

Running TypeScript will tell you if you used an incorrect property or method of a particular object in JavaScript

Knowing proper type shapes, TypeScript can help with debugging

(VSCode uses TypeScript to detect errors even for plain JavaScript files, that's why the errors pop up underlined and show TypeScript specific errors, like below)

*/

'hello'.lenght // Property 'lenght' does not exist on type '"hello"'. Did you mean 'length'?
