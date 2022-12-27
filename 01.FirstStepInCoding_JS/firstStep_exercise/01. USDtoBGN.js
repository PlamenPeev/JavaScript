function converter(input){
    let usd = Number(input[0]);
    let bgn = 1.79549;
    let result = usd * bgn;
    console.log(result);
}

converter(["12.5"]);