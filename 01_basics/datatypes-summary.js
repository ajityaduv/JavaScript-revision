// primitive 

// 7 types : string, Number, Boolean, Null, undefined. Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

let id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id==anotherId)

// const bigNumber = 23456782346666988n

// Reference data type(non primitive)

// Array Objects 

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Ajit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof outsideTemp)



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non primitive)

let myYoutubeName = "Ajit Yadav"

let anothername = myYoutubeName
anothername = "Develop and Grow"

// console.log(myYoutubeName);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ajityadav@google.com"

console.log(userOne.email)
console.log(userTwo.email)
