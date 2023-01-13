function animal(input) {
    let nameOfAnimal = input[0];

    switch (nameOfAnimal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}

animal(["snake"]);