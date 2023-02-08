function salary(input){
let openTabs = Number(input[0]);
let salary = Number(input[1]);

let leftOfSalary = salary;

for(let i = 1; i <= openTabs; i++){
    let nameWebsite = input[i + 1];

    if(leftOfSalary <= 0){
        break;
    }else{
    if(nameWebsite == "Facebook"){
        leftOfSalary -= 150;
    }else if(nameWebsite == "Instagram"){
       leftOfSalary -= 100;  
    }else if(nameWebsite == "Reddit"){
        leftOfSalary -= 50;  
     }
    }
   
}

if(leftOfSalary <= 0){
    console.log(`You have lost your salary.`);
}else{
console.log(leftOfSalary);

}

}

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);