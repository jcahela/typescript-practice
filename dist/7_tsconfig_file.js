/*

The tsconfig.json file allows us to change the default rules of TypeScript, and specifies things like telling the compiler what files to run on and more!

tsconfig.json is always placed in the root of your project and you can customize what rules you want the compiler to enforce

*/
// ex. tsconfig.json
// {
//   "compilerOptions" : {
//     "target": "es2017",
//     "module": "commonjs",
//     "strictNullChecks": true
//   },
//   "include": ["**/*.ts"]
// }
/*

  - compilerOptions - a nested object that contains t he rules for the TS compiler to enforce
    - target - the value "es2017" means the project will use the 2017 version of EcmaScript standards of JavaScript
    - module - this project will be using "commonjs" syntax for importing/exporting modules
    - strictNullChecks - specifies that variables can ONLY have null or undefined values if they are EXPLICITLY ASSIGNED those values
  - include - determines what files the compiler applies the rules to. The current value means the compiler should check every single file that has the .ts extension

With a tsconfig.json file, you can use the tsc command without specifying any arguments. it will run on files specified in tsconfig.json's "include" key

*/
