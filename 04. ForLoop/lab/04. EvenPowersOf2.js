function evenPower(input){
    let num = Number(input[0]);
    let n = 1;
    for (let i = 0; i <= num; i+=2) {
          console.log(n);  
       n = n * 2 * 2;
     
    }
 }
 evenPower(["5"]);