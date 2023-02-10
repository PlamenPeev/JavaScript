function oscars(input) {
let nameOfActor = input[0];
let points = Number(input[1]);
let n = Number(input[2]);

let count = 1;
for(let i = 1; i<= n; i++){
    let nameOfEvaluative = input[count + 2];
    let pointOfEvaluation = Number(input[count + 3]);
    count += 2;

    // console.log(nameOfEvaluative);
    // console.log(pointOfEvaluation);

 points += ((nameOfEvaluative.length * pointOfEvaluation) / 2) ;

   if(points >= 1250.5){
       break;
   }
}

if (points >= 1250.5){
    console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${points.toFixed(1)}!`);
}else{
    console.log(`Sorry, ${nameOfActor} you need ${(1250.5 - points).toFixed(1)} more!`);
}
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
;