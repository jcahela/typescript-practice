/*

Default Parameters

*/

/*

If a function parameter is assigned a default value, TypeScript will infer the variable type to be the same as the default value's type

This is similar to Type Inference of an initialized variable being the same as the type of its value

This is a cleaner way of getting the same functionality as the '?' optional parameter. Assigning a default value already implies that they're optional parameters

*/

// Before:
function proclaim1(status?: string, repeat?: number) {
  for (let i = 0; i < (repeat || 1); i += 1) {
    console.log(`I'm ${status || 'not ready...'}`);
  }
}

// After:
function proclaim2(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

proclaim2(); // prints 'I'm not ready' using the default parameters
proclaim2('ready?'); // prints 'I'm ready?' once using the default parameter for repeat
proclaim2('ready!', 3); // prints "I'm ready! I'm ready! I'm ready!" since it was given arguments that override the default parameters
