function fooddelivery(input){
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let veganMenu = 8.15;

    let countOfChikensMenu = Number(input[0]);
    let countOfFishesMenu = Number(input[1]);
    let countOfVegansMenu = Number(input[2]);

    let priceOfOrderMenu = countOfChikensMenu * chickenMenu 
                          + countOfFishesMenu * fishMenu 
                          + countOfVegansMenu * veganMenu;
    let priceOfDesert = priceOfOrderMenu * 0.2;
    let priceDelivery = 2.50;

    let totalPrice = priceOfOrderMenu + priceOfDesert + priceDelivery;
    console.log(totalPrice);
}

fooddelivery(["9 ",
"2 ",
"6 "]
);