function bonusScore(input) {

    let startScore = Number(input[0]);
    let bonus = 0.0;
    if(startScore <= 100){
        bonus = 5;
    }else if( startScore > 100 && startScore <= 1000){
        bonus = startScore * 0.2;
    }else if(startScore > 1000){
        bonus = startScore * 0.1;
    }

    if(startScore % 2 == 0){
bonus += 1;
    }

    if(startScore % 10 == 5){
        bonus += 2;
    }

    console.log(bonus);
    console.log(bonus + startScore);

}

bonusScore(["15875"]);