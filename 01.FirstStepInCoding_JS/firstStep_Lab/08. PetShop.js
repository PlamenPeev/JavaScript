function petShop(input){
    let numberOfDogPackets = Number(input[0]);
    let numberOfCatPackets = Number(input[1]);
    let totalPrice = numberOfDogPackets * 2.50 + numberOfCatPackets * 4;
    console.log(`${totalPrice} lv.`);

}

petShop(["13",
"9"]
);