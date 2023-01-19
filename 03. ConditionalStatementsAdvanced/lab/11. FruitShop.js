function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let totalPrice = 0.0;

    let isValidDay = (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday" || day == "Saturday" || day == "Sunday");
    let isValidFruit = (fruit == "banana" || fruit == "apple" || fruit == "orange" || fruit == "grapefruit" || fruit == "kiwi" || fruit == "pineapple" || fruit == "grapes");

    if (!isValidDay || !isValidFruit) {
        console.log("error");
    } else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (fruit == "banana") {
            totalPrice = quantity * 2.50;
        } else if (fruit == "apple") {
            totalPrice = quantity * 1.20;
        } else if (fruit == "orange") {
            totalPrice = quantity * 0.85;
        } else if (fruit == "grapefruit") {
            totalPrice = quantity * 1.45;
        } else if (fruit == "kiwi") {
            totalPrice = quantity * 2.70;
        } else if (fruit == "pineapple") {
            totalPrice = quantity * 5.50;
        } else if (fruit == "grapes") {
            totalPrice = quantity * 3.85;
        }
        console.log(totalPrice.toFixed(2));
    } else if (day == "Saturday" || day == "Sunday") {
        if (fruit == "banana") {
            totalPrice = quantity * 2.70;
        } else if (fruit == "apple") {
            totalPrice = quantity * 1.25;
        } else if (fruit == "orange") {
            totalPrice = quantity * 0.90;
        } else if (fruit == "grapefruit") {
            totalPrice = quantity * 1.60;
        } else if (fruit == "kiwi") {
            totalPrice = quantity * 3.00;
        } else if (fruit == "pineapple") {
            totalPrice = quantity * 5.60;
        } else if (fruit == "grapes") {
            totalPrice = quantity * 4.20;
        }
        console.log(totalPrice.toFixed(2));
    } else {
        console.log("error");
    }

}

fruitShop(["apple",
    "Tuesday",
    "2"]);
