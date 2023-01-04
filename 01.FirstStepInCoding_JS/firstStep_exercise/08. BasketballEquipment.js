function basketballExpenses(input){
    let annualtaxes = Number(input[0]);

   let sneakers = annualtaxes - (annualtaxes * 0.4);
let team = sneakers - (sneakers * 0.2);
let ball = team / 4.0;
let accessories = ball / 5.0;

let expenses = annualtaxes + sneakers + team + ball + accessories;
console.log(expenses);
}

basketballExpenses(["550"]);