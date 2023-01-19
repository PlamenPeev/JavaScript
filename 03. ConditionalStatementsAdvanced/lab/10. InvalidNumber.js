function validNumber(input) {
let num = Number(input[0]);

if( (num < 100 || num > 200) && num != 0){
console.log("invalid");
}
}

validNumber(["75"]);