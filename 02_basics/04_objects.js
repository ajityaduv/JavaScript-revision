// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Aman"
tinderUser.isloggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Ajit",
            lastname: "yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "ajit@gmail.com"
    },
    {
        id: 1,
        email: "ajit@gmail.com"
    },
    {
        id: 1,
        email: "ajit@gmail.com"
    },
    {
        id: 1,
        email: "ajit@gmail.com"
    },
    {
        id: 1,
        email: "ajit@gmail.com"
    }

]

// console.log(users[1].email);
users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));


// destructuring

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseINstructor: "Hitesh"
}

const {courseINstructor: Teacher} = course // curly brases means destructuring

console.log(Teacher);

// JSON : JavaScript Object Noatation
// JSON file has following forma without declaration of objects

// {
//     "name": "Ajit",
//     "Coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]