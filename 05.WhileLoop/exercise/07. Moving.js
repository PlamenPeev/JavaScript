function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let higth = Number(input[2]);

    
    let availablePlace = width * length * higth;
    
    let index = 3;
    
    
    while(true){
      let element = input[index];  
      if(element == "Done"){
          break;
      }else{
          element = Number(input[index]);
      }
    
    if(availablePlace < 0){
        break;
    }
    availablePlace -= element;
    
    index++;
    }
    
    if(availablePlace > 0){
    console.log(`${availablePlace} Cubic meters left.`);
    }else{
        console.log(`No more free space! You need ${-availablePlace} Cubic meters more.`);
    }
    }

    moving(["10", 
    "1",
    "2",
    "4", 
    "6",
    "Done"])
    ;
    