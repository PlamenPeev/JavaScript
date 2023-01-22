function gardening(input) {
    let rose = 5;
    let dahlia = 3.80;
    let tulip = 2.80;
    let narcissus = 3;
    let gladiolus = 2.50;

    let typeFlowers = input[0];
    let count = Number(input[1]);
    let budjet = Number(input[2]);

    //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    
    let price = 0;
    let expenses = 0;

    if( typeFlowers == "Roses"){
        price = rose;
        expenses = count * price;
        if(count > 80){
            expenses *= 0.9;
        }
    }else if( typeFlowers == "Dahlias"){
       price = dahlia;
       expenses = count * price;
       if(count > 90){
        expenses *= 0.85;
    }
    }else if( typeFlowers == "Tulips"){
       price = tulip;
       expenses = count * price;
       if(count > 80){
        expenses *= 0.85;
    }
    }else if( typeFlowers == "Narcissus"){
       price = narcissus;
       expenses = count * price;
       if(count < 120){
        expenses *= 1.15;
    }
    }else if( typeFlowers == "Gladiolus"){
       price = gladiolus;
       expenses = count * price;
       if(count < 80){
        expenses *= 1.20;
    }
    }

    if(budjet >= expenses){
        console.log(`Hey, you have a great garden with ${count} ${typeFlowers} and ${(budjet - expenses).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${(expenses - budjet).toFixed(2)} leva more.`);
    }

}

gardening(["Roses",
"55",
"250"]);