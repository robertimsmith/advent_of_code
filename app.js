/*BFFFBBFRRR: row 70, column 7, seat ID 567.
FFFBBBFRRR: row 14, column 7, seat ID 119.
BBFFBBFRLL: row 102, column 4, seat ID 820.*/

var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q5.txt", "utf8");
let output = text.split("\n");
let j = 0;
let test1 = ["BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"];
//0 - 127, highest seat number?
let input = output;
maxSeat = 127*8+7;
let max = 0;

var seatList = new Array(maxSeat);

for (j = 0; j < maxSeat; j++){
    seatList[j] = 0;
}


for (j = 0; j < input.length; j++){
    //console.log(j, input[j], input.length);
    seat = rowFinder(input[j]);
    //console.log(seat);
    if (seat > max){
        max = seat;
    }
    seatList[seat] = 1;
    //seatList[seat-1] = 1;
    //seatList[seat+1] = 1;

}
console.log("Highest seat is " + max);
//console.log(maxSeat);

for (j = 80; j < 927; j++){
    if (seatList[j] === 0){
        console.log("Empty seat " + j);
    }
}
function rowFinder(rowString){
    let i = 0;
    let low = 0;
    let high = 127;
    let left = 0;
    let right = 7;
    

    for (i = 0; i <= 6; i++){
//        console.log(i, rowString[i]);
        let char = rowString[i];
        let difference = Math.round((high - low)/2);
        if (char === "B"){
            low += difference;
        }
        if (char === "F"){
            high -= difference;
        }
//        console.log("Low=  " + low + " High= " + high);
    }

    for (i = 7; i <= 9; i++){
//        console.log(i, rowString[i]);
        let char = rowString[i];
        let difference = Math.round((right - left)/2);
        if (char === "R"){
            left += difference;
        }
        if (char === "L"){
            right -= difference;
        }
 //       console.log("Left=  " + left + " Right= " + right);
    }

    
    let result = high.toString() + " " + right.toString();
    let seat = high * 8 + right
    //console.log(high + " " + right + " " + seat);
    
    return(seat);
}

// part 1 = 926
// part 2 926 is too high