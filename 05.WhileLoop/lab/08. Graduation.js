function graduation(input) {
let name = input[0];
let grades = 1;
let countYears = 0;
let countGrade2 = 0;
let index = 0;
let sum = 0;
let isExcluded = false;


while(grades <= 12){
    index++;
    countYears++;
    let grade = Number(input[index]);
    
    if(grade < 4.00){
            countGrade2++;   
        
    }else if ( grade >= 4.00){
       sum += grade;  
       grades++;
    }

    if(countGrade2 > 1){
        isExcluded = true;
        countYears--;
                    break;
    }
   
   }


   if (!isExcluded){
          let average = sum / 12.00;
      console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`); 
   }else{
       console.log(`${name} has been excluded at ${countYears} grade`);
   }



}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);