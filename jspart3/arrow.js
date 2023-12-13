const user = {
    username: "hitoi",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()


//arrowfunction

// const chai = function(){

//     let username = "hite"
//     console.log(this.username);
// }

// chai()


//now to remove the function keyword arrow function  is used

const chai = () => {
    let username = " hirt"
    console.log(this);
}

chai()

//add function using arrrow function

// const add = (num1 ,num2) => {
//     return num1 + num2

// }

// console.log(add(3,4)); 


//one more way to use arrow function as an implicit function

// const add = (num1 ,num2) =>  (num1 + num2)

//if to add object then
const add = (num1 ,num2) =>  ({username: "hitesh"})


    console.log(add(3,4)); 

