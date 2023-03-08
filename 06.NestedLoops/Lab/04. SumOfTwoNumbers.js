function sumOfTwoNumbers(input) {
let firstNum = Number(input[0]);
let lastNum = Number(input[1]);
let magicNum = Number(input[2]);

let count = 0;
let isFound = false;

for(let i = firstNum; i <= lastNum; i++){
    for(let j = firstNum; j <= lastNum; j++){
        count++;
        if( (i + j) === magicNum){
            console.log(`Combination N:${count} (${i} + ${j} = ${magicNum})`);
            isFound = true;
            break;
        }

        if(isFound){
            break;
        }
        
    }
    if(isFound){
        break;
    }
}

if(isFound == false){
    console.log(`${count} combinations - neither equals ${magicNum}`);
}

}
sumOfTwoNumbers(["1",
"10",
"5"]);