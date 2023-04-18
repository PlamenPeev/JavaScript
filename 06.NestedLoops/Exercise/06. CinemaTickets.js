function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    let totalCount = 0;

    let studentType = 0;
    let standardType = 0;
    let kidType = 0;


    while(command !== "Finish"){
let movieTitle = input[index];
index++;
let availableSeats = Number(input[index]);
index++;
let projection = input[index];
let countSeats = 0;

while(projection !== "End"){
    let typeOfTicket = input[index];
if(typeOfTicket === "standard"){
    standardType++;
    countSeats++;
    totalCount++;
}else if(typeOfTicket === "student"){
    studentType++;
    countSeats++;
    totalCount++;
}else if(typeOfTicket === "kid"){
    kidType++;
    countSeats++;
    totalCount++;
}

if(countSeats == availableSeats){
break;
}
    index++;
    projection = input[index];
}

console.log(`${movieTitle} - ${((countSeats / availableSeats) * 100).toFixed(2)}% full.`);

index++;
command = input[index];
    }

    console.log(`Total tickets: ${totalCount}`);
    console.log(`${((studentType / totalCount) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardType / totalCount) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidType / totalCount) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]);