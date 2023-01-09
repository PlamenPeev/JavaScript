function guessPassword(input) {

    let word = input[0];

    if(word == "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}

guessPassword(["s3cr3t!P@ssw0rd"]);