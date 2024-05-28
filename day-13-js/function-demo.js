//user defined function
//implementing function
function signalFunction(val){
    signal=val;
    if(signal=="Red")
        console.log("GO")
    else{
        console.log("stop");
    }
}

//function call
val = "Red";
signalFunction(val);
signalFunction(val);
signalFunction(val);
signalFunction(val);
signalFunction(val);

