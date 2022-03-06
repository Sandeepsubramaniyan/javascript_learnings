// call back function

function greet(name,myFunction) {
    console.log("Hello World")

    //call function 
    //executed only after greet() is executed
    
    myFunction(name);
}

//callback function
function sayName(name) {
    console.log("Hi"+ " "+ name)
}

//calling function after 2 seconds

setTimeout(greet,2000,'John',sayName)