function specialNum(input) {
let num = Number(input[0]);

let specialNum = 0;
let printLine = "";

for(let i = 1111; i<= 9999; i++){
    let count = 0;
    let currentNum = i.toString();
    for(let j = 0; j < currentNum.length; j++){
        let currentDigit = Number(currentNum[j]);
        if(num % currentDigit == 0){
            count++;
        }
    }
    if(count == 4){
        specialNum = i;
        printLine += specialNum + " ";
    }
}
console.log(printLine);
}

specialNum(["16"]);