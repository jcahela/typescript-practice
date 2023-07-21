/*

Variables that aren't initially given a value can still be given an explicit type through a type annotation.

This is done by appending a colon (:) then the type (ex. string) after the variable name

*/

let favoriteDrink : string;

favoriteDrink = 'Water';

favoriteDrink = 4; // Type 'number' is not assignable to type 'string'.
