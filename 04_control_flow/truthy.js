const useremail = "d@divyanshu.ai"

if(useremail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

//falsy values

// false
// 0
// -0
// BigInt 0n

// ""
// null
// undefined
// NaN


//truthy values

// "0 or anything"
// "false"
// " " space inside the String

// []
// {}
// function(){}


//check whether array is empty or not
// const arr =[]

// if(arr.length===0){
//     console.log("array is empty");
// }
 
//check whether object is empty or not

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("objects are empty");
}

//nullish coalescing operator (??) : only for null and undefined

let val1;

val1 = null ?? 10


console.log(val1);

//ternary operator

const iceteaprice = 100
iceteaprice <=80 ? console.log("less than 80"): console.log("more than 80");