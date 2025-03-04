//1. Add more variables
let ratePerYear = 7; // Lãi suất mỗi năm
let compoundInterest = principal * Math.pow((1 + ratePerYear / 100), time);
console.log("Compound Interest:", compoundInterest.toFixed(2));
//2. Try using different mathematical operators
let num1 = 10, num2 = 3;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponentiation:", num1 ** num2);
//3.Compare let, const, var
var x = 10;
let y = 20;
const z = 30;

x = 15; // OK
y = 25; // OK
// z = 35; // Error: Assignment to constant variable

function testVar() {
    if (true) {
        var a = 50; // Accessible outside block
    }
    console.log(a); // Works
}

function testLet() {
    if (true) {
        let b = 60; // Only accessible in block
    }
    // console.log(b); // Error: b is not defined
}

testVar();
testLet();
