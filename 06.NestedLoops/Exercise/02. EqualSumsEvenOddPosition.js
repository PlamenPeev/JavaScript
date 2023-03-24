function equalSumsEvenOddPosition(input) {
let n1 = Number(input[0]);
let n2 = Number(input[1]);
let printLine = "";

for(let i = n1; i <= n2; i++){
    let currentString = i.toString();
    let evenSum = 0;
    let oddSum = 0;
    let position = 0;
    
    for( let i = 0; i < currentString.length; i++){
        position = i + 1;
        let currentDigit = Number(currentString[i]);
       
                 if(position % 2 == 0){
                     evenSum += currentDigit;
                  }else{
                     oddSum += currentDigit;
                  }
                  
    }
            if( evenSum === oddSum){
                printLine += `${currentString} `;
                
            }  
            
}
 console.log(printLine); 

}
equalSumsEvenOddPosition(["100000",
"100050"]);