function trainTheTrains(input) {
let n = Number(input[0]);

let index = 1;
let command = input[index];

let totalSum = 0;
let count = 0;

while(command !== "Finish"){
    let titleCours = input[index];
    
    let sum = 0;
    for(let i = 1; i<= n; i++){
        index++;
        let grade = Number(input[index]);
        sum += grade;
        totalSum += grade;
        count++;
        
    }
    console.log(`${titleCours} - ${(sum / n).toFixed(2)}.`);

    index++;
    command = input[index];
    
}

console.log(`Student's final assessment is ${(totalSum / count).toFixed(2)}.`);
}

trainTheTrains(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);