function traveling(input) {
let destination = input[0];
let budjet = Number(input[1]);
let sum = 0;   
let index = 1;

while(destination != "End"){
index++;

while(sum < budjet){
      let money = Number(input[index]);
      sum += money;
    index++;
     }

     console.log(`Going to ${destination}!`);
     destination = input[index++];
     budjet = Number(input[index]);
     sum = 0;
     
}
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);