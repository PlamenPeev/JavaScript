function examPreparation(input) {
let badGrades = Number(input[0]);

let count = 0;
let badCount = 0
let sum = 0;
let nameOfProblem = "";

let index = 1
let element = input[index];
let isStop = false;

while(element !== "Enough"){
let textProblem = input[index];
let grade = Number(input[index + 1]);
nameOfProblem = textProblem;
sum += grade;

if(grade <= 4.00){
    badCount++;
}

if(badCount === badGrades){
isStop = true;
break;
}

count++;
index += 2;;
element = input[index];
}

if(isStop){
console.log(`You need a break, ${badCount} poor grades.`);
}else{
     console.log(`Average score: ${(sum / count).toFixed(2)}`);
    console.log(`Number of problems: ${count}`);
    console.log(`Last problem: ${nameOfProblem}`);

}

}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
;