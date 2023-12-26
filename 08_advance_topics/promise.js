const promiseOne = new Promise(function(resolve,reject){


    setTimeout(function(){
        //console.log("Async task is completed");
        resolve() //this is amethod used to consume the promise 
    },1000)
})

promiseOne.then(function(){
    //console.log("promise is consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        //console.log("async task 2");
    },1000)
    resolve()
}).then(function(){
    //console.log("async 2 is resolved");
})


const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email: "chai@example.com"})
    },1000)
})

promisethree.then(function(user){
    //console.log(user);
})


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"divyanshu",password:"@61!"})
        }
        else{
            reject("ERRROR: something went wrong")
        }
    },1000)
})

promisefour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
}).catch((error)=>{
    console.log(error);
})

