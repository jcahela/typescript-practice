/*

Optional Parameters:

TypeScript expects functions to be provided a value for all arguments
This isn't always ideal, sometimes parameters are optional

To indicate a parameter is intentionally optional in TypeScript, dd a '?' after its name.
This tells TypeScript that the parameter is allowed to be undefined, and doesn't always have to be provided

*/
function greetAnyone(name) {
    console.log(`Hello,${name || "sir/ma'am"}`);
}
greetAnyone(); // No Error!
