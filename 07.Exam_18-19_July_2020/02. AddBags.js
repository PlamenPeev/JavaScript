function addBags(input) {
    let priceBaggageOver20KG = Number(input[0]);
    let baggageInKG = Number(input[1]);
    let daysToTravel = Number(input[2]);
    let countOfBaggage = Number(input[3]);
    
    
    
    let price = priceBaggageOver20KG;
    if( baggageInKG < 10){
        price *= 0.2;
    }else if(baggageInKG >= 10 && baggageInKG <= 20){
        price *= 0.5;
    }else if(baggageInKG > 20){
        price *= 1.0;
    }
    
    
    if(daysToTravel > 30){
        price += price * 0.1;
    }else if(daysToTravel >= 7 && daysToTravel <= 30){
        price += price * 0.15;
    }else if(daysToTravel < 7){
        price += price * 0.4;
    }
    
    let totalPrice = price * countOfBaggage
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
    
    }
    addBags(["30",
    "18",
    "15",
    "2"]);    