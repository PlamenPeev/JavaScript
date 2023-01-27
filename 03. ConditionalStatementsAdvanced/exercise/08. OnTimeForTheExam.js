function timeForExam(input) {
    let startHourExam = Number(input[0]);
    let startMinutesExam = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let startExamInMinutes = startHourExam * 60 + startMinutesExam;
    let arrivalForExamInMinutes = arrivalHour * 60 + arrivalMinutes;
    let diffMinutes = startExamInMinutes - arrivalForExamInMinutes;

    if (diffMinutes < 0) {
        console.log("Late");

        if (Math.abs(diffMinutes) < 60) {
            console.log(`${Math.abs(diffMinutes)} minutes after the start`);
        } else {
            let hour = Math.trunc(Math.abs(diffMinutes) / 60);
            let minutes = Math.abs(diffMinutes) % 60;
            if(minutes < 10){
                console.log(`${hour}:0${minutes} hours after the start`); 
            }else{
              console.log(`${hour}:${minutes} hours after the start`);   
            }
            
        }

    } else if (diffMinutes >= 0 && diffMinutes <= 30) {
        console.log("On time");

        if (diffMinutes == 0) {
            console.log();
        } else if (diffMinutes <= 30) {
            console.log(`${diffMinutes} minutes before the start`);
        }


    } else if (diffMinutes >= 0 && diffMinutes > 30) {
        console.log("Early");

        if (diffMinutes < 60) {
            console.log(`${diffMinutes} minutes before the start`);
        } else {
            let hour = Math.trunc(diffMinutes / 60);
            let minutes = diffMinutes % 60;
            if(minutes < 10){
                console.log(`${hour}:0${minutes} hours before the start`); 
            }else{
               console.log(`${hour}:${minutes} hours before the start`);    
            }
        }
    }
}

timeForExam(["9",
    "30",
    "9",
    "50"]);
