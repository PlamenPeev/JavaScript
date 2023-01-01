
//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

function depositCalculation(input){
    let amountDeposit = Number(input[0]);
    let termOfMonths = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;
let totatAmount = amountDeposit + termOfMonths *((amountDeposit * annualInterestRate) / 12);
console.log(totatAmount);
}

depositCalculation(["2350", "6", "7"]);