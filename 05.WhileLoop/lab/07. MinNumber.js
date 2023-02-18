function minNum(input) {
let element = input[0];
let min = Number.MAX_SAFE_INTEGER;
let index = 0;

while(element !== "Stop"){
    let currentNum = Number(input[index]);
    if(currentNum < min){
        min = currentNum;
    }

    element = input[index + 1];
    index++;
}
console.log(min);
}
minNum([-5000,
    -4000,
    -3000,
    -2000,
    -1000,
    "Stop"]);