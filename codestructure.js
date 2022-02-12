// Statement-->
//     statement are syntax constructs and commands that perform action
//   we can pass multiple statement in a single line just by passsing semicolon
console.log('hello');console.log('hello');

// semicolon may be omitted in most cases when a line break exists
console.log('hello')
console.log('world')
// javascript iterprets the line break as an "implicit" semicolon. this is called an automatic  semicolon insertion
// in most cases a new line implies a semicolon. But in most cases does not mean "always"
// example here semicolon does not implies
console.log(
    3+
    1+
    2
);
//when if there is a incomplete expression  so a semicolon there would be incorrect
//there is some cases where js fails to assume a semicolon where it is really needed

// alert("Hello");

// [1, 2].forEach(alert);

console.log('hello');

[1, 2].forEach(console.log);

//Comments-->
// comments describes what the code does and why they dont effect its execution the engine simply ignores them
//one line comments start with two forward slash characters  //
// multiline comments start with a forward slash and a asterisk  /*abc on the tree*/
//Hot keys to comment code  ctrl+/ for single line ctrl+shift+/ for multiline
//nested comments are not supported 