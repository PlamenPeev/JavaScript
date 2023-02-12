function tennisRanklist(input) {
let countOfTours = Number(input[0]);
let startingPoints = Number(input[1]);

let finalPoints = startingPoints;
let pointsFromAllTournaments = 0;
let winningTours = 0;

for(let i = 1; i<= countOfTours; i++){
let tournamentStage = input[i + 1];

if(tournamentStage == "W"){
    finalPoints += 2000;
    pointsFromAllTournaments += 2000;
    winningTours++;
}else if(tournamentStage == "F"){
    finalPoints += 1200;
    pointsFromAllTournaments += 1200;
}else if(tournamentStage == "SF"){
    finalPoints += 720;
    pointsFromAllTournaments += 720;
}

}

console.log(`Final points: ${finalPoints}`);
console.log(`Average points: ${Math.floor(pointsFromAllTournaments / countOfTours)}`);
console.log(`${(winningTours / countOfTours * 100).toFixed(2)}%`);


}

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"]);