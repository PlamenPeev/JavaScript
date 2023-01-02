function vacationBookList(input){
    let numberOfPages = Number(input[0]);
    let readedPagesForOneHour = Number(input[1]);
    let numberOfDays = Number(input[2]);
let resultHoursPerDay = (numberOfPages / readedPagesForOneHour) / numberOfDays;
console.log(resultHoursPerDay);
}

vacationBookList(["432 ",
"15 ",
"4 "]
);