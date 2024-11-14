// singleton
// Object.create ==> constructor method

// object literals

const mySym = Symbol("Key1")
const JsUser = {
    name: "Ajit",
    [mySym]: "mykey1",
    "full name": "Ajit Yadav",
    age: 18,
    location: "Jaipur",
    email: "ajit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


JsUser.email ="ajit@outlook.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email = "ajit@gmail.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("This is my code");
}
JsUser.greetingTwo= function(){
    console.log(`This is my code, ${this.name}`);
}

// console.log(JsUser.greeting); //only reference will be shown but function execution will not take place
console.log(JsUser.greeting()); //function will be called
console.log(JsUser.greetingTwo()); //function will be called

