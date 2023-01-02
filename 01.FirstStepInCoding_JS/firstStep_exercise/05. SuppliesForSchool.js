
function needMoneyFrSupplies(input){
let packOfChemicals = 5.80;
let packOfMarkers = 7.20;
let oneLiterOfPreparat = 1.20;

let numberOfPacksChemicals = Number(input[0]);
let numberOfPacksMarkers = Number(input[1]);
let litersOfPreparat = Number(input[2]);
let discount = Number(input[3]) / 100;

let totalAmount = packOfChemicals*numberOfPacksChemicals
                  + packOfMarkers * numberOfPacksMarkers 
                  + oneLiterOfPreparat * litersOfPreparat;

let finalAmountAfterDiscount = totalAmount -(totalAmount * discount);
console.log(finalAmountAfterDiscount);
}

needMoneyFrSupplies(["4 ",
"2 ",
"5 ",
"13 "
]
);
