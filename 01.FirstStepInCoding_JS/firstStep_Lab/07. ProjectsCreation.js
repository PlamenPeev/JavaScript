function progectCreation(input){
let nameArchitect = input[0];
let numberOfProjects = Number(input[1]);
let totalHours = numberOfProjects * 3;
console.log(`The architect ${nameArchitect} will need ${totalHours} hours to complete ${numberOfProjects} project/s.`);
}

progectCreation(["Sanya ",
"9 "]
);