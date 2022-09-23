/**
 * @file: Lab 6 Övningar i array functions och test av JSDoc
 * @author: Lars-Erik Jemt
 * @version: 1.0
 *
 */

const helloArrow = () => console.log("Hello World!");
helloArrow();

const greet = name => console.log("hej " + name + " hur mår du?");
greet("mr. x");

const calc = (numberOne, numberTwo) => numberOne + numberTwo
console.log(calc(1,3));

const tip = (sum, percent) => {
    let result;
    result = sum + sum * percent / 100;
    return result;
}

console.log(tip(10, 15));

const tipShorterVersion = (sum, percent) => sum + sum * percent / 100

console.log(tipShorterVersion(10, 15));
