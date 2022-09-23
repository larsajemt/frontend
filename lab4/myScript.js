var number1 = 1;
var number2 = 2;
const person = {forName:"Lars-Erik", lastName:"Jemt", age:57 };

console.log (number1 + " plus " + number2 + " är: " + (number1+number2));
console.log (number1 + " minus " + number2 + " är: " + (number1-number2));
console.log (number1 + " gånger " + number2 + " är: " + (number1*number2));
console.log ("Hej mitt namn är " + person.forName + " " + person.lastName + " och jag är " + person.age + " år gammal");



/**********************************************/
/*** Lite testkod som inte hör till labben  ***/
/**********************************************/

let test = "hej";

function testFunction (test) {
    test = "Hejdå";
    console.log(test);
}
testFunction();

console.log(test);

let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);
text = "Welcome "+firstName+ ", "+ lastName + " !";
console.log(text);