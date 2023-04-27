function aluminiumJoinery(input) {
    let countOfJoinery = Number(input[0]);
    let type = input[1];
    let wayOfDelivery = input[2];

    let deliveryPrice = 60;
    let price = 0;
   

    if (type == "90X130") {
        price = 110;
        if (countOfJoinery > 30 && countOfJoinery <= 60) {
            price *= 0.95;
        }else if(countOfJoinery > 60){
            price *= 0.92;
        }
    } else if (type == "100X150") {
        price = 140;
        if (countOfJoinery > 40 && countOfJoinery <= 80) {
            price *= 0.94;
        }else if(countOfJoinery > 80){
            price *= 0.9;
        }
    } else if (type == "130X180") {
        price = 190;
        if (countOfJoinery > 20 && countOfJoinery <= 50) {
            price *= 0.93;
        }else if(countOfJoinery > 50){
            price *= 0.88;
        }
    } else if (type == "200X300") {
        price = 250;
        if (countOfJoinery > 25) {
            price *= 0.91;
        }else if(countOfJoinery > 50 && countOfJoinery <= 50){
            price *= 0.86;
        }
    }

    let priceOfAll = countOfJoinery * price;

if(wayOfDelivery == "With delivery" ){
    priceOfAll = priceOfAll + deliveryPrice;
}

    if(countOfJoinery > 99){
        priceOfAll *= 0.96;
    }


    if (countOfJoinery < 10) {
        console.log("Invalid order");
    } else {
console.log(`${priceOfAll.toFixed(2)} BGN`);
    }

}

aluminiumJoinery(["105",
"100X150",
"With delivery"]);
