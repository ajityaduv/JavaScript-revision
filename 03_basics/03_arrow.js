const user = {
    username: "Ajit",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Baba"
// user.welcomeMessage()

// console.log(this);

// function chai(){
    // username: "Ajit"
    // console.log(this.username);
// }
//  chai()

// const chai = function () {
//     username: "Ajit"
//     console.log(this.username);
// }

// const chai =  () => {
//     username: "Ajit"
//     console.log(this);
// }

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// implicit return 

// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)

// how to return and object
const addTwo = (num1, num2) => ({username: "Ajit"})

console.log(addTwo(3,4));
