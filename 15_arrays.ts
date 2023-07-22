/*

Arrays

*/

// Arrays which contain only a specific type can be specified when declaring the variable by adding a [] at the end of the type, or by using Array<T> syntax:

let names: string[] = ['Danny', 'Samantha'];

let names2: Array<string> = ['Danny', 'Samantha'];



// If you try to assign an array of numbers to a variable declared as string[], you get an error:

let incorrectNames: string[] = [1, 'Danny', 'Samantha']; // Type 'number' is not assignable to type 'string'.



// You can also get an error if you try to push a wrong type onto an array specified for a type:

names.push(3); // Argument of type 'number' is not assignable to parameter of type 'string'.


// You can also declare MULTIDIMENSIONAL ARRAYS, which shows an error if there's an element that's not of type string[]:

let multiDimensionalArray: string[][] = [['Danny', 'Samantha'], ['Smith', 'Dakota'], 'Hello']; // Type 'string' is not assignable to type 'string[]'.


// This works for any number of multidimensional arrays:

let superMultiDimensionalArray: number[][][] = [[[3], [4]], [[1],[2]], [5]] // Errors out on the last index because it was expecting [5] inside the purple brackets, not the number 5: Type 'number' is not assignable to type 'number[]'.
