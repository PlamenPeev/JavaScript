function sequenceN(input) {
let n = Number(input[0]);
let k = 1;
while( k <= n){
    console.log(k);
    k = 2*k + 1;
}
}

sequenceN(["17"]);