//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==7){
       // console.log("7 is the best ");
    }
   //console.log(element);
    
}

//loop inside  loop

for (let i = 0; i < 10; i++) {
   // console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value ${j} and outer loop ${i}`);
       
       //console.log(`${i} * ${j} = ${i*j}`);
    }
    
}


//basic keywords : break and continue


//1 break
for (let i = 0; i <= 20; i++) {
    const element = i

    if(i ==5 ){
        //console.log("detected 5")
        break
    }
    //console.log(element);
    
}


//continue
for (let i = 0; i <= 20; i++) {
    const element = i

    if(i ==5 ){
        console.log("detected 5")
       continue
    }
    console.log(element);
    
}