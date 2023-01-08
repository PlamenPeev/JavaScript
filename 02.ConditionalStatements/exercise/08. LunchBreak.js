function lunchBreak(input) {
let nameOFMovie = input[0];
let duration = Number(input[1]);
let rest = Number(input[2]);

let timeForLunch = rest * 0.125;
let recreation = rest * 0.25;
let leftTime = rest - (timeForLunch + recreation); 

if(leftTime >= duration){
    console.log(`You have enough time to watch ${nameOFMovie} and left with ${Math.ceil(duration - leftTime)} minutes free time.`);
}else{
    console.log(`You don't have enough time to watch ${nameOFMovie}, you need ${Math.ceil(duration - leftTime)} more minutes.`);
}

}

lunchBreak(["Teen Wolf",
"48",
"60"])
;