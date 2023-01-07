function wordSwimmRecord(input) {

    let recordsInSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

      let addSeconds = (distance / 15) * 12.5;
    let totalTime = (distance * timePerMeter) + Math.floor(addSeconds);
   
    if(recordsInSeconds > totalTime){
console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(totalTime - recordsInSeconds).toFixed(2)} seconds slower.`);
    }

}

wordSwimmRecord(["55555.67", "3017", "5.03"]);