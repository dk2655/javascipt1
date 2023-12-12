 let mydate = new Date()
 console.log(mydate);

 console.log(mydate.toDateString());
 console.log(mydate.toISOString());
 console.log(mydate.toJSON());
 console.log(mydate.toLocaleDateString());
 console.log(mydate.toLocaleString());

 console.log(typeof mydate);


 let mycreatedate = new Date(2023,0,23)
//  console.log(mycreatedate.toDateString());

let mytimestamp = Date.now()

console.log(mytimestamp);
console.log(mycreatedate.getTime());// these times are in milliseconds

console.log(Math.floor(Date.now()/1000)); // to convert them into seconds divide them by 1000

//to write them in a sentence wite it as
let newdate = new Date()
console.log(newdate.getDate());

// ${newdate.getDay()} and the month is _________