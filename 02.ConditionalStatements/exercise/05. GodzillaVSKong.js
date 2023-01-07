function movie(input) {
let budjet = Number (input[0]);
let statisticCount = Number (input[1]);
let priceDress = Number (input[2]);

let decor = budjet * 0.1;
if( statisticCount > 150){
    priceDress *= 0.9;
}

let needMoney = statisticCount * priceDress + decor;

if(budjet >= needMoney){
console.log(`Action!`);
console.log(`Wingard starts filming with ${(budjet - needMoney).toFixed(2)} leva left.`);
}else{
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${(needMoney - budjet).toFixed(2)} leva more.`);

}

}

movie(["9587.88",
"222",
"55.68"]);