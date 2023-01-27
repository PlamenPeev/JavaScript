function skiTrip(input) {

    let singleRoom = 18.00;
    let apartment = 25.00;
    let president = 35.00;


    let days = Number(input[0]);
    let typeRoom = input[1];
    let evaluation = input[2];

    let nigths = days - 1;
    let price = 0;

    if (days < 10) {
        if (typeRoom == "room for one person") {
            price = singleRoom * nigths;
        } else if (typeRoom == "apartment") {
            price = apartment * nigths;
            price *= 0.7;
        } else if (typeRoom == "president apartment") {
            price = president * nigths;
            price *= 0.9;
        }

    } else if (days >= 10 && days <= 15) {
        if (typeRoom == "room for one person") {
            price = singleRoom * nigths;
        } else if (typeRoom == "apartment") {
            price = apartment * nigths;
            price *= 0.65;
        } else if (typeRoom == "president apartment") {
            price = president * nigths;
            price *= 0.85;
        }
    } else if (days > 15) {
        if (typeRoom == "room for one person") {
            price = singleRoom * nigths;
        } else if (typeRoom == "apartment") {
            price = apartment * nigths;
            price *= 0.5;
        } else if (typeRoom == "president apartment") {
            price = president * nigths;
            price *= 0.8;
        }
    }

    if (evaluation == "positive") {
        price *= 1.25;
    } else if (evaluation == "negative") {
        price *= 0.9;
    }

    console.log(price.toFixed(2));

}

skiTrip(["14",
    "apartment",
    "positive"]);
