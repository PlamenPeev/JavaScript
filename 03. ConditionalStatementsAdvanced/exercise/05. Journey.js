function journey(input) {

    let budjet = Number(input[0]);
    let season = input[1];

       let destination = "";
    let vacation = "";
    let price = 0;

    if(budjet <= 100){
        destination = "Bulgaria";
        if(season == "summer"){
vacation = "Camp";
price = budjet * 0.3;
        }else if(season == "winter"){
vacation = "Hotel";
price = budjet * 0.7;
        }
    }else if( budjet <= 1000) {
        destination = "Balkans";
        if(season == "summer"){
            vacation = "Camp";
            price = budjet * 0.4;
                    }else if(season == "winter"){
            vacation = "Hotel";
            price = budjet * 0.8;
                    }
    }else if( budjet > 1000){
        destination = "Europe";
        vacation = "Hotel";
        price = budjet * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${vacation} - ${price.toFixed(2)}`);

}
journey(["1500", "summer"]);