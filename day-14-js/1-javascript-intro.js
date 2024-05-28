// declaring variables in java script
// var can also be used. nowadays we use let
// statement ends with ;
// single line comment

/* multi line comment
 declaring variables in java script
 var can also be used. nowadays we use let
statement ends with ;
single line comment
*/
// int i = 10;
//figureout datatype by the value itself
let fname = "Aishwarya";//string
let lname = "last name"
//variables
let a = 100;//number
// var a = 100;
let b = 200;
let c = 30.5;

// let a = 600; let will not allow to redeclare the same variable name
// var a = 600; var will allow to redeclare
//constant
//it will not change during program execution
const PI = 3.14;
// const PI = 6.37; const will not allow to recreate/redeclare the constant
// variable will change during the program execution

console.log(a);
a = 450;
console.log("The value of A is: ", a);

console.log(PI)
// PI = 90.45; not allowed in java script
console.log(PI)
total = a+b;
console.log("The added value of A nad B : ",total)// addition
conc=fname+" "+lname
console.log("welcome ",conc)//concatenation
res=a+fname
console.log(res)
console.log(typeof(res))
console.log(typeof(total))
console.log(typeof(conc))
