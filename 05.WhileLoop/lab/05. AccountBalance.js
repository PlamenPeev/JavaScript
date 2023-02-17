function accountBalance(input) {
let element = input[0];
let totalSum = 0;
let index = 0;

while (element !== "NoMoreMoney"){
    let num = Number(input[index]);
     index++;
    if(num > 0){
        console.log(`Increase: ${num.toFixed(2)}`);
        totalSum += num;
    }else{
        console.log(`Invalid operation!`);
        break;
    }

   element = input[index];
    
}
console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"]);