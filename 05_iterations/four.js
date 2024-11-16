
const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : "ruby",
    py : 'python',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
    
}
// Output for above 
// 0 is a programming language
// 1 is a programming language
// 2 is a programming language
// 3 is a programming language
// 4 is a programming language

// Checking if this loop works for arrays too
const programming = ["js", "java", "py", "cpp", "rb"]
for (const key in programming) { //keys in arrays are numbers starting from 0
   console.log(`${programming[key]} is a programming language`);
   
}
// Ouput for above
// js is a programming language
// java is a programming language
// py is a programming language
// cpp is a programming language
// rb is a programming language

// Checking if for in loop works for maps too

const map = new Map()
map.set('IN', "India")
map.set('USA', 'United States of America')
map.set('Fr', "France")

for (const key in map) {
    console.log(key);
}
// no output since the maps are not iterable by nature