function sayMyname() {
    console.log("A");
    console.log("J");
    console.log("I");
    console.log("T");
}

// sayMyname()

// function addTwoNumbers(number1, number2) { // here number1 and number2 are parameters
//     console.log(number1+number2);
// }
function addTwoNumbers(number1, number2) { // here number1 and number2 are parameters
    // let result = number1 + number2
    // return result

    return number1+number2
}

// addTwoNumbers("a",5) // here "a" and 5 are arguments
const result = addTwoNumbers(3,5)

// console.log("Result: ", result);

// function loginUserName(username="sam"){
//     if(!username){
//         console.log("Please enetr a username");
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserName("AJIT"))
// console.log(loginUserName())

// Part two of functions

// function calculateCartPrice(val1, val2, ...num1){  //rest operator   ========> rest operator and spread operator have same notation
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 600, 900, 1000));
// O/P [ 600, 900, 1000 ]


const user = {
    username: "Ajit",
    price: 99
}

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
// }

// handleObject(user)
// handleObject({
//     username: "baba",
//     price: 6000
// })

const myNewArray = [500, 200, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 500, 700]))
