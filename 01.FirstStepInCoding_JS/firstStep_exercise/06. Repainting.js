function repainting(input){
    let protectivNylonPerOneSquareMeter = 1.50;
    let paintForOneLiter = 14.50;
    let paintTinnerPerOneLiter = 5.00;

    let needNylon = Number(input[0]);
    let needPaint = Number(input[1]);
    let needPaintTinner = Number(input[2]);
    let hoursForWork = Number(input[3]);

    let amount = (needNylon + 2) * protectivNylonPerOneSquareMeter
                     + (needPaint + needPaint*0.1) * paintForOneLiter
                     + needPaintTinner * paintTinnerPerOneLiter
                     + 0.40;

                     let paidToMasters = (amount * 0.3) * hoursForWork;
                     let totalAmount = amount + paidToMasters;
                     console.log(totalAmount);

}
repainting(["5 ",
"10 ",
"10 ",
"1 "]
);