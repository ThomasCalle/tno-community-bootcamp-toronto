let isNum = true;//boolean

//if structure

// if(condition){
// set of staements
// }

let a = 900;
let b = 1900;
let c = 400;

//simple if

if(a > b){
    console.log("A is bigger");
    console.log("This result coming from simple if");
}
console.log("----------------------------------")
//if else

if(a > b){
    console.log("A is bigger");
    console.log("This result coming from if else");
}else{
    console.log("B is bigger");
    console.log("This result coming from if else");
}

//nested if - if else if
//Logical operator - AND - &&
if(a > b && a > c){
    console.log("A is bigger");
}else if(b > c && b > a){
    console.log("B is bigger");
}else{
    console.log("C is bigger");
}

//Logical OR - ||
if(a > b || a > c){
    console.log("A is bigger ", a);
}else {
    console.log("Both conditions didn't satisfied")
}
//== comparison operator
//operands and operators

if(a==b){
    console.log("Both are equal");
}else{
    console.log("Both are not equal");
}


//Logical NOT !

if(a!=b){
    console.log("Both are not equal");
}else{
    console.log("Both are equal");
}



