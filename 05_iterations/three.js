// for of


// [" ", " ", " " ]
// [{}, {}, {}]

const arr = [1,2,3,4,5,]

for (const numr of arr) {
    // console.log(numr);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', 'United States of America')
map.set('Fr', "France")
// map.set('IN', "India") maps take unique values only and in order only 

// console.log(map);

for (const i of map) { // for of loop converts key value pairs into arrays 
    // console.log(i);
    
}
// OUTPUT for above loop 
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

// to print them in key value pair following syntax is used
for (const [i, j] of map) { 
    // console.log(i, ':-', j);
} 

// OUTPUT
// IN :- India
// USA :- United States of America
// Fr :- France

// Applying forof in an object below

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) { //TypeError: myObject is not iterable
//     console.log(key, ' :- ', value);
// }
const myObject2 = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObject2) { //TypeError: myObject is not iterable
//     console.log(key, ' :- ', value);
// }

