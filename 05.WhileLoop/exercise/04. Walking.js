function walking(input) {
let sum = 0;
let index = 0;
    

    while(true){
        let element = input[index];
        if( sum >= 10000){
            break;
        }
        
        if(element === "Going home"){
            element = Number(input[index + 1]);
            sum += element;
            break;
        }else{
         element = Number(input[index]);
        sum += element;
       
        }
 index++; 
        
    }

    if(sum >= 10000){
        console.log(`Goal reached! Good job!`);
        console.log(`${sum - 10000} steps over the goal!`);
    }else{
        console.log(`${10000 - sum} more steps to reach goal.`);
    }
}

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
;