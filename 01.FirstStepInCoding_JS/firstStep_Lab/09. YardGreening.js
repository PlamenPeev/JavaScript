function yeardGreening(input){
    let squareMeters = Number(input[0]);
    let pricePerOneMeter = 7.61;
    let discount =(squareMeters * pricePerOneMeter) * 0.18;
    let finalPrice = (squareMeters * pricePerOneMeter) - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yeardGreening(["150"]);