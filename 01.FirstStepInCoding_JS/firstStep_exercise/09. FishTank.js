function fishTank(input){

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);

    let volumeFishTank = length * width * height;
    let volumeInLiters = volumeFishTank / 1000;
    let occupiedSpace = procent / 100;
    let needLiters = volumeInLiters *(1-occupiedSpace);
    console.log(needLiters);
}

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
);