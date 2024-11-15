// Immediately Invoked Functions Expressions

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
}) ();
// semicolon is needed in the end in order to specify the end of the program

// This is done to avoid pollution due to global scope 
// (function aurcode() {
//     console.log(`DB CONNECTED TWO`)
// }) ();

// (() => {
//     console.log(`DB CONNECTED TWO`)
// }) ();

((name) => { //location of paramters and arguments
    console.log(`DB CONNECTED TWO ${name}`)
}) ("Ait");