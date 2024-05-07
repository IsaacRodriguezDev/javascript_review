'use strict'
//Declare and assign values to 3 variables using each of the following keywords let, const, and var.
let quarter = .25
const dollar = 1
var fiftyDollar = 50

// Use console.log() to display the value of the variables in the browser's console.
console.log(`quarter is :[${quarter}] dollar is: [${dollar}] fiftyDollar is: [${fiftyDollar}]`)

//Change the value of the variables declared with the let and var. Print their new value to the console with console.log()
quarter = .50
fiftyDollar = 100
console.log(`quarter is now: [${quarter}] fiftyDollar is now: [${fiftyDollar}]`)

//What happens if you try to change the value of the variable declared with the const and print its new value to the console?
// ^^^an error will happen because a const cannot be changed to a new value
// ^^dollar = 2
//^^ console.log(`${dollar}`)

//Why might you choose to use the const keyword?
// ^^^you want to use const when you don't want the value of a variable to change

//What is one reason it not best practice to use the var keyword?
// ^^^a reason for not using var keyword for best practice is becuase the var can be accessed anywhere in global scope so it can accidentally mess your code up