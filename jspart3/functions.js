//some basic function
//1
function addtwonum(num1,num2){

    let result = num1 + num2
    return result
}

const result = addtwonum(2,6)

// console.log("result:",result);


//2
function loginusermessage(username){
    if(!username){
        console.log("enter the username");
        return
    }

    return `${username} just loggedin.`
}

// console.log(loginusermessage("divyanshu"));
// console.log(loginusermessage(""));


//3
function calculatecartprice(...numb1){ // to add multiple items in the result we use rest operator ... 
    return numb1

}

console.log(calculatecartprice(200,300,400));


//objects and functions

const user = {
    product:"table",
    price: 199999
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.product} and the price is ${anyobject.price} `);
}

handleobject(user)

//array and functions

const mynewarr =[100,200,300,400]

function returnsecondvalue(getarray){

    return getarray[1]
}

console.log(returnsecondvalue(mynewarr));