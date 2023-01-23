function fishBoat(input) {
let springPrice = 3000;
let summerPrice = 4200;
let autumnPrice = 4200;
let winterPrice = 2600;


let budjet = Number(input[0]);
let season = input[1];
let count = Number(input[2]);

let price = 0;

//"Spring", "Summer", "Autumn", "Winter"
if( season == "Summer"){
price = summerPrice;
if(count <= 6){
    price *= 0.9;
}else if(count > 6 && count <= 11){
price *= 0.85;
}else if(count > 12){
    price *= 0.8;
}
}else if (season == "Spring"){
    price = springPrice;
    if(count <= 6){
        price *= 0.9;
    }else if(count > 6 && count <= 11){
    price *= 0.85;
    }else if(count > 12){
        price *= 0.75;
    }
}else if (season == "Autumn"){
    price = autumnPrice;
    if(count <= 6){
        price *= 0.9;
    }else if(count > 6 && count <= 11){
    price *= 0.85;
    }else if(count > 12){
        price *= 0.75;
    }
}else if (season == "Winter"){
    price = winterPrice;
    if(count <= 6){
        price *= 0.9;
    }else if(count > 6 && count <= 11){
    price *= 0.85;
    }else if(count > 12){
        price *= 0.75;
    }
}

if(count % 2 == 0 && season != "Autumn"){
    price *= 0.95;
}

if(budjet >= price){
    console.log(`Yes! You have ${(budjet - price).toFixed(2)} leva left.`);
}else{
    console.log(`Not enough money! You need ${(price - budjet).toFixed(2)} leva.`);

}

}

fishBoat(["2000",
"Winter",
"13"]);