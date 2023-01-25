function hotelRoom(input) {

    let month = input[0];
    let countNights = Number(input[1]);

//месецът – May, June, July, August, September или October
let priceStudio = 0;
let priceApartment = 0;

if(month == "May" || month == "October"){
priceStudio = 50;
priceApartment = 65;
if(countNights > 7 && countNights <= 14){
    priceStudio *= 0.95;
}else if(countNights > 14){
    priceStudio *= 0.70;
    priceApartment *= 0.9;
}
}else if(month == "June" || month == "September"){
    priceStudio = 75.20;
    priceApartment = 68.70;
    if(countNights > 14){
        priceStudio *= 0.80;
        priceApartment *= 0.9;
    }
}else if(month == "July" || month == "August"){
    priceStudio = 76;
    priceApartment = 77;
    if(countNights > 14){
        priceApartment *= 0.9;
    }
}
console.log(`Apartment: ${(priceApartment * countNights).toFixed(2)} lv.`);
console.log(`Studio: ${(priceStudio * countNights).toFixed(2)} lv.`);


}

hotelRoom(["August",
"20"]);
