function toyShop(input) {
    let puzzel = 2.60;
    let doll = 3;
    let teddyBear = 4.10;
    let minion = 8.20;
    let truck = 2;

    let priceVacation = Number(input[0]);
    let puzzelCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truscksCount = Number(input[5]);

    let totalPrice = puzzelCount*puzzel + dollCount*doll + bearCount*teddyBear 
    + minionsCount*minion + truscksCount*truck;

    let totalCount = puzzelCount + dollCount + bearCount + minionsCount + truscksCount;

if(totalCount >= 50){
totalPrice *= 0.75;
}

let rent = totalPrice * 0.1;
totalPrice -= rent;

if(priceVacation <= totalPrice){
    console.log(`Yes! ${(totalPrice - priceVacation).toFixed(2)} lv left.`);
}else{
    console.log(`Not enough money! ${(priceVacation - totalPrice).toFixed(2)} lv needed.`);
}
    
}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"]);