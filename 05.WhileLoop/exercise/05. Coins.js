function coins(input) {
    let amount = Number(input[0]);
    let amountIncents = Math.floor(amount * 100);
    let count = 0;

    while(amountIncents > 0){

        if(amountIncents >= 200){
            amountIncents -= 200;
            count++;
        }else if(amountIncents >= 100){
            amountIncents -= 100;
            count++;
        }else if(amountIncents >= 50){
            amountIncents -= 50;
            count++;
        }else if(amountIncents >= 20){
            amountIncents -= 20;
            count++;
        }else if(amountIncents >= 10){
            amountIncents -= 10;
            count++;
        }else if(amountIncents >= 5){
            amountIncents -= 5;
            count++;
        }else if(amountIncents >= 2){
            amountIncents -= 2;
            count++;
        }else if(amountIncents >= 1){
            amountIncents -= 1;
            count++;
        }

    }

    console.log(count);

}
coins(["0.56"]);