function cleverLily(input) {
let age = Number(input[0]);
let priceWashingMachine = Number(input[1]);
let priceOfToy = Number(input[2]);


let countToys = 0;
let sum = 0;

let countEvenYear = 0;

for( let i = 1; i <= age; i++){
    if(i % 2 == 0){
let evenAgeCount = (i / 2) * 10;
sum += evenAgeCount;
countEvenYear++;
    }else{
        countToys++;
    }
}
let saveMoney = (sum - countEvenYear) + (countToys * priceOfToy);

if( priceWashingMachine <= saveMoney){
    console.log(`Yes! ${(saveMoney - priceWashingMachine).toFixed(2)}`);
}else{
    console.log(`No! ${(priceWashingMachine - saveMoney).toFixed(2)}`);
}

}

cleverLily(["10",
"170.00",
"6"]);