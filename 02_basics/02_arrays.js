const marvel_heroes = ["Ironman", "Thor", "Spiderman", "Antman"]
const dc_heroes = ["batman", "superman", "flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[4][1])

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const allnewHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allnewHeroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Ajit"));
console.log(Array.from("AJIT"))
console.log(Array.from({name:"Ajit"})) //interesting case and returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
