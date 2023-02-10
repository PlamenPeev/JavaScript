function trekkingMania(input) {
let countOfGroups = Number(input[0]);

let all = 0;

let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

for(let i = 1; i<= countOfGroups; i++){
let countOfPeople = Number(input[i]);
all += countOfPeople;

if(countOfPeople <= 5){
    p1 += countOfPeople;
}else if(countOfPeople >= 6 && countOfPeople <= 12){
    p2 += countOfPeople;
}else if(countOfPeople >= 13 && countOfPeople <= 25){
    p3 += countOfPeople;
}else if(countOfPeople >= 26 && countOfPeople <= 40){
    p4 += countOfPeople;
}else if(countOfPeople >= 41 ){
    p5 += countOfPeople;
}
}

console.log(`${(p1 / all * 100).toFixed(2)}%`);
console.log(`${(p2 / all * 100).toFixed(2)}%`);
console.log(`${(p3 / all * 100).toFixed(2)}%`);
console.log(`${(p4 / all * 100).toFixed(2)}%`);
console.log(`${(p5 / all * 100).toFixed(2)}%`);
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);