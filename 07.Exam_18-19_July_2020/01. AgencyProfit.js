function agencyProfit(input) {
    let nameCompany = input[0];
    let adultsTicketsCount = Number(input[1]);
    let kidsTicketsCount = Number(input[2]);
    let priceAdultTicket = Number(input[3]);
    let fee = Number(input[4]);

    let priceKidTicket = priceAdultTicket * 0.3;
    let finalPriceAdultTicket = priceAdultTicket + fee;
    let finalPriceKidTicket = priceKidTicket + fee;

    let totalPrice = (adultsTicketsCount * finalPriceAdultTicket) + (kidsTicketsCount * finalPriceKidTicket);
    let profit = totalPrice * 0.2;

    console.log(`The profit of your agency from ${nameCompany} tickets is ${profit.toFixed(2)} lv.`);


}

agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"]);