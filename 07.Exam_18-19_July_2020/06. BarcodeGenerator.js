function barcodeGenerator(input) {
let firstNum = Number(input[0]);
let secondNum = Number(input[1]);

        let f1 = Math.floor(firstNum / 1000);
        let f2 = Math.floor(firstNum % 1000 / 100);
        let f3 = Math.floor(firstNum % 100 / 10);
        let f4 = firstNum % 10;

        let s1 = Math.floor(secondNum / 1000);
        let s2 = Math.floor(secondNum % 1000 / 100);
        let s3 = Math.floor(secondNum % 100 / 10);
        let s4 = secondNum % 10;

        let printLine = "";

        for (let i = f1; i <= s1 ; i++) {
            for (let j = f2; j <= s2 ; j++) {
                for (let k = f3; k <= s3 ; k++) {
                    for (let l = f4; l <= s4 ; l++) {

                        if(i % 2 !=0 && j % 2 !=0 && k % 2 !=0 && l % 2 !=0){
                            printLine += `${i}${j}${k}${l}` + " ";
                            
                        }
                    }
                }
            }
        }
        console.log(printLine);
}


barcodeGenerator(["2345",
"6789"]);