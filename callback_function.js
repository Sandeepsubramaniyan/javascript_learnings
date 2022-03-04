//function

function greet(name,callback) {
    console.log('Hi'+' '+name);
    callback();
    
}

//callback function

function callMe() {
    console.log("i have tried call back function ");
}

greet('sandeep',callMe);