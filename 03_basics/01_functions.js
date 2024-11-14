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

function loginUserName(username="sam"){
    if(!username){
        console.log("Please enetr a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserName("AJIT"))
console.log(loginUserName())
