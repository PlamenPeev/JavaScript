function tradeCommissions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    
    let isValidTown = (town == "Sofia" || town == "Varna" || town == "Plovdiv");
    let isValidSales = sales > 0;
    
    let commission = 0.00;
    if(!isValidTown){
        console.log("error");
    }else if(sales < 0){
        console.log("error");
    }else if( sales >=0 && sales <=500){
        if(town == "Sofia"){
            commission = sales * 0.05;
        }else if(town == "Varna"){
            commission = sales * 0.045;
        }if(town == "Plovdiv"){
            commission = sales * 0.055;
        }
        console.log(commission.toFixed(2));
    }else if( sales > 500 && sales <= 1000){
        if(town == "Sofia"){
            commission = sales * 0.07;
        }else if(town == "Varna"){
            commission = sales * 0.075;
        }if(town == "Plovdiv"){
            commission = sales * 0.08;
        }
        console.log(commission.toFixed(2));
    }else if( sales > 1000 && sales <= 10000){
        if(town == "Sofia"){
            commission = sales * 0.08;
        }else if(town == "Varna"){
            commission = sales * 0.1;
        }if(town == "Plovdiv"){
            commission = sales * 0.12;
        }
        console.log(commission.toFixed(2));
    }else if( sales > 10000){
        if(town == "Sofia"){
            commission = sales * 0.12;
        }else if(town == "Varna"){
            commission = sales * 0.13;
        }if(town == "Plovdiv"){
            commission = sales * 0.145;
        }
        console.log(commission.toFixed(2));
    }
    
    }

    tradeCommissions(["Sofia",
    "1500"])