function cinema(input) {

let premier = 12.00;
let normal = 7.50;
let discount = 5.00;

let type = input[0];
let rows = Number(input[1]);
let cols = Number(input[2]);

let income = 0;
let priceTicket = 0;

if(type == "Premiere"){
    priceTicket = premier;
}else if(type == "Normal"){
    priceTicket = normal;
}else if(type == "Discount"){
    priceTicket = discount;
}

income = rows * cols * priceTicket;
console.log(`${income.toFixed(2)} leva`);

}

cinema(["Discount",
"12",
"30"]);
