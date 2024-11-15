// var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("Inner: ",a);

}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Ajit"

    function two(){
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website);
    two()

}

// one()

if (true) {
    const username = "Ajit"
    if(username === "Ajit"){
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++ Interesting stuff +++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}

addTwo(4) // when a function is called before declaration, then it does get executed
const addTwo = function(num){ 
     return num + 2
}