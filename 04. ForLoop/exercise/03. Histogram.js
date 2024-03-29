function histogram(input){
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 0; i < n; i++){
        let currentNum = Number(input[i + 1]);
        if(currentNum < 200){
            p1++;
        }else if(currentNum >= 200 && currentNum < 400){
            p2++;
        }else if(currentNum >= 400 && currentNum < 600){
            p3++;
        }else if(currentNum >= 600 && currentNum < 800){
            p4++;
        }else if(currentNum >= 800 ){
            p5++;
        }

    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);

}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"]);