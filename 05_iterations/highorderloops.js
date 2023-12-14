//for of loop

const arr = [1,2,3,4,5]

for (const num of arr){
    //console.log(num);
    
}


const greeteings = "hello world!"

for (const greet of greeteings) {
    //console.log(`each char is ${greet}`);
 
    
}

//Maps

const map = new Map()

map.set('IN','India')
map.set('Fr','France')

// console.log(map);

//for of loop in maps

for (const [key, value] of map) {
    
    //console.log(key, ':-', value);
}


//to iterate objects we need to use for in loop

const myobject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift'
}

for (const key in myobject) {
    //console.log(`${key} shortcut is for ${myobject[key]}`);
    
}


//for each loop

const coding =["js","ruby","java","python","cpp"]

// coding.forEach(function  (item) {
//     console.log(item);
// }    )

//using arrow operator

coding.forEach(   (item,index,arr) => {
    //console.log(item,index,arr);
}  )

// by passing a function

function printme(item){
    //console.log(item);
}

coding.forEach(printme)



//multiple objects in an array and using for each loop

const mycoding = [

    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"pyhton",
        languagefilename:"py"
    }

]

mycoding.forEach(  (item) => {

    console.log(item.languagefilename);
})