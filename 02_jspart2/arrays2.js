const marvel_heros =["thor","ironman","spiderman"]

const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);


//concat method
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

//spread operator

const all_new_heros =[...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//flat method

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,56]]]

const real_another_array= another_array.flat(Infinity)
console.log(real_another_array);