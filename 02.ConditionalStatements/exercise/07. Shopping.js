function shopping(input) {
let budjet = Number(input[0]);
let videoCards = Number(input[1]);
let procesors = Number(input[2]);
let ram = Number(input[3]);

let priceVideocard = videoCards * 250;
let priceProcesors = procesors * (priceVideocard * 0.35);
let priceRam = ram * (priceVideocard * 0.1);

let totalAmount = priceProcesors + priceVideocard + priceRam;

let discount = 0.0;
if(videoCards > procesors){
totalAmount -= totalAmount * 0.15;
}

if(totalAmount <= budjet){
    console.log(`You have ${(budjet - totalAmount).toFixed(2)} leva left!`);
}else{
    console.log(`Not enough money! You need ${(totalAmount - budjet).toFixed(2)} leva more!`);
}

}

shopping(["920.45",
"3",
"1",
"1"]);