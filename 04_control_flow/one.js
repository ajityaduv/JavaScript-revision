// conditionals
const isUserLoggedIn = true
const temperature = 41

// if( temperature == 50){
//     console.log("Less than 50")
// }
// else{
//     console.log("Temperature is greater than 50");
// }

// <, >, <=, >=, ==, === (Checks the data type also), !==

// const score = 200
// if (score >100){
//     let power = "Fly"
//     console.log(`User Power is: ${power}`);
// }

// console.log(`User Power ${power}`)



// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");   
// above line is not a good syntactical practice

// if (balance < 500) {
//     console.log("less than 500")
// }
// else if (balance < 750) {
//     console.log("less than 750")
// }
// else if (balance < 900) {
//     console.log("less than 900")
// }
// else {
//     console.log("less than 1200")
// }

const UserLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy Courses")
}
if (loggedInfromGoogle || loggedInFromEmail) {
    console.log("User logged in ")
}
