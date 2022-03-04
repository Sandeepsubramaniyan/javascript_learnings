// The benefit of using a callback function is that you can 
// wait for the result of a previous function call 
// and then execute another function call.

//Program with setTimeout()

function greet() {
    console.log("hello world")
}

function sayName(name) {
    console.log("i am "+ name)
}

//calling the functions
setTimeout(greet,1000)
sayName("sandeep")

//output : first print the hello world as the greet func excutes after a 1 second 