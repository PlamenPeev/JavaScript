function vacation(input) {
let needMoney = Number(input[0]);
let realMoney = Number(input[1]);

let index = 2;
let countFiveNextSpendingDays = 0;
let isStop = false;
let countDays = 0;

while(true){
    let action = input[index];
    let money = Number(input[index + 1]);
    countDays++;

    if(action === "spend"){
        if((realMoney - money) < 0){
            realMoney = 0;
        }else{
          realMoney -= money;  
        }
        countFiveNextSpendingDays++;
    }else if(action === "save"){
        realMoney += money;
        countFiveNextSpendingDays = 0;
    }

    if(realMoney >= needMoney){
        break;
    }

    if(countFiveNextSpendingDays == 5){
           isStop = true;
           break;
    }

    index += 2;

}

if(isStop){
console.log("You can't save the money.");
console.log(`${countDays}`);
}else{
console.log(`You saved the money for ${countDays} days.`);
}

}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);