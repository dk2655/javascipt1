//array

const arr = [0,2,3,4];
// console.log(arr);

//array methods

// arr.push(6)
// arr.push(7)
// arr.pop()
// console.log(arr)

// console.log(arr.includes(9));


//new array

const arr2 = arr.join()
// console.log(arr2);
// console.log(typeof arr2);


//slice and splice
console.log("A", arr);

const myn1 = arr.slice(1,3)

console.log(myn1);
console.log("B",arr);

const myn2 = arr.splice(1,3)
console.log("C",arr);
console.log(myn2);