// array => resizable.. => can contain a mix of data types 
// shallow copy => an objext whose properties share same reference(points to same underlying values) as those of source objects.
// deep copy => copy whose properties do not share the same reference point

const myArr = [0,1,2,3,4,5,6]
const myHeros = ["ironman", "nagraj", "hulk","Antman"," Spiderman"]

const myArr2 = new Array(1,2,3,4,)
// console.log(myArr2[0]);

// Array Methods

myArr.push(7)
myArr.push(8)
myArr.pop()
// myArr.unshift(8)
myArr.shift() //removes 1st element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(newArr)

// console.log(myArr);

// Slice splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);





