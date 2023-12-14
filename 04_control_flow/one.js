//if

const a =90
const b =88

if(a>=b){
//.......then the following condition will be executed
console.log("it's good");
}
else{
    console.log("change it");
}

//<, >, <=, >=, ==, ===, !=, !==


//nesting 

const balance  = 1000

if(balance<500){
    console.log("lesss than 500");
}
else if(balance<750){
    console.log("less than 750");
}
else if(balance<900){
    console.log("less than 1200");
}

//switch case statements

const month = 3;
 
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 3:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}