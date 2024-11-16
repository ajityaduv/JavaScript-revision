const coding = ["js", "ruby", "java", "Python"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// above operation using arrow function is shown below
// coding.forEach( (item) => {
//     console.log(item);
// })

function printme(item){
    console.log(item);
}

// coding.forEach(printme) //only refernce (printme) is given and not execution (printme())

// for each gets access not only to item but also to index and the whole array
coding.forEach((item, index, key) => {
    // console.log(item, index, key);
})
// Output for above is 
// js 0 [ 'js', 'ruby', 'java', 'Python' ]
// ruby 1 [ 'js', 'ruby', 'java', 'Python' ]
// java 2 [ 'js', 'ruby', 'java', 'Python' ]
// Python 3 [ 'js', 'ruby', 'java', 'Python' ]

const myCoding = [
    {
        languageName: "JavaScript",
        languagefile: "js"
    },
    {
        languageName: "Java",
        languagefile: "java"
    },
    {
        languageName: "Python",
        languagefile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagefile);
    
})