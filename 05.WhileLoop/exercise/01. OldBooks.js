function oldBooks(input) {
let searchBook = input[0];
let count = 0;

let index = 1;
let element = input[index];
let isFound = false;

while(element != "No More Books"){
    
    if(element == searchBook){
       
        isFound = true;
        break;
    }

    count++;
    index++;
    element = input[index];
}

if(!isFound){
console.log(`The book you search is not here!`);
console.log(`You checked ${count} books.`);

}else{
    console.log(`You checked ${count} books and found it.`);
}

}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]);