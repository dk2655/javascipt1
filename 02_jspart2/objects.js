//object literals


const mysym = Symbol("mykey1")

const jsuser = {
    name:"divyanshu",
    age:18,
    [mysym]:"key1", //defining a symobl in js
    location:"jammu",
    email:"eeerrr@mail.com",
    lastloggedin:["monday","wednesday"]
}

// console.log(jsuser["email"]);
// console.log(jsuser["name"]);
// console.log(jsuser[mysym]); //printing/calling of a symbol

// //freezing of an object
// jsuser.email ="dk@mail.com"
// Object.freeze(jsuser)

// jsuser.email = "dk2@mail.com"

// console.log(jsuser);


//adding a funcion 

jsuser.greeting = function(){
    console.log("hello js user");
}

jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name} `);
}

//printing of a function in js
console.log(jsuser.greeting());

console.log(jsuser.greetingtwo());