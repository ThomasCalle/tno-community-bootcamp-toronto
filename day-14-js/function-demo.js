//user defined function
//implementing function
function signalFunction(val){//argument
    signal=val;
    
    if(signal=="Red"){
        console.log('STOP signal\'s'); // \ back slash escape character
    }else if(signal==="Green"){
        console.log("GO")
    }else if(signal==="Yellow"){
        console.log("SLOW")
    }else{
        console.log("Signal not working!");
    }
}
function printHello(){
    console.log("Welcome to function!");
}

//function call
printHello();
// val = "Red";
signalFunction("Red");//parameter
// signalFunction("Red",2);//parameter
signalFunction("Green");
signalFunction("Yellow");


