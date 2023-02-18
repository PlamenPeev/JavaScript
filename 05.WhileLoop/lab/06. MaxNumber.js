function maxNum(input) {
let max = Number.MIN_SAFE_INTEGER;
let index = 0;
let element = input[0];


while(element !== "Stop"){
let currentNum = Number(input[index]);
if(currentNum > max){
    max = currentNum;
}
element = input[index + 1];
index++;
}
console.log(max);
}
maxNum([-5000,
    -4000,
    -3000,
    -2000,
    -1000,
    "Stop"]);