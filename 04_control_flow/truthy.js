useremail = []

// if (useremail) {
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email")
// }

// falsy values

// false, 0, -0, Bignt 0n, "", null, undefined, NaN

// truthy values 
// "0", 'false', " ", [], {}, function(){}

// if (useremail.length == 0) {
//     console.log("Array is empty")
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length == 0) {
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 20 ?? 30


// console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 150
iceTeaPrice <= 200 ? console.log("less than 200") : console.log("Greater than 200")
