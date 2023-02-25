function cake(input) {
let width = Number(input[0]);
let length = Number(input[1]);

let availablePieces = width * length;

let index = 2;


while(true){
  let element = input[index];  
  if(element == "STOP"){
      break;
  }else{
      element = Number(input[index]);
  }

if(availablePieces < 0){
    break;
}
availablePieces -= element;

index++;
}

if(availablePieces > 0){
console.log(`${availablePieces} pieces are left.`);
}else{
    console.log(`No more cake left! You need ${-availablePieces} pieces more.`);
}
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);
