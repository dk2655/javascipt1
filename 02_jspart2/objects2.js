//object declaration

// const instauser = new Object()  //this object created is a singleton object

const instauser = {} //this is not a singllton object

instauser.id = "dk555"
instauser.isloggedin = false
instauser.name = "dk"


// console.log(instauser);

//declaring object inside object

const regularuser = {
    email:"anonymous@gmail.com",
    fullname:{
        userfullname:{
            firstname: "divyanshu",
            lastname: "khajuria"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);  //to access objects of objects use the dot operator


//again recap to the spread operator

const obj1 = {1:"a", 2:"b"}
const obj2 = {11:"a", 12:"b"}
const obj3 = {21:"a", 22:"b"}

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

// console.log(Object.keys(instauser));
// console.log(Object.values(instauser));
// console.log(Object.entries(instauser));

// console.log(instauser.hasOwnProperty('isloggedin'));


//destructuring of objects

const course = {
    coursename: "Javascript",
    price: "000",
    courseinstructor: "hitesh master"
}

const {courseinstructor:instructor} = course   //you can also change the name of the key you have defined in the object declaration

//console.log(courseinstructor);
console.log(instructor);


