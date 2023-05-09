function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    let bestPlayer = "";
    let countOfGoals = Number.MIN_SAFE_INTEGER;

    while (command !== "END") {
        let nameOfPlaer = command;
        let goals = Number(input[index + 1]);

        if (goals == countOfGoals) {
            break;
        }

        if (goals > countOfGoals) {
            bestPlayer = nameOfPlaer;
            countOfGoals = goals;
        }

        if (countOfGoals >= 10) {
            bestPlayer = nameOfPlaer;
            break;
        }

        index++;
        command = input[index];
    }

    console.log(`${bestPlayer} is the best player!`);
    if (countOfGoals >=3 ) {
        console.log(`He has scored ${countOfGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${countOfGoals} goals.`);
    }
}
bestPlayer(["Neymar", "2",
"Ronaldo",
"1",
"Messi",
"3",
"END"]);