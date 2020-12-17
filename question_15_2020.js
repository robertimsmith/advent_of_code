var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q15_test.txt", "utf8");
let output = text.split(",");
var size = output.length;
let count = new Array(7);
var rounds = count.length;
var speak = 0;
var times = 0;
var lastNumber = 0;
for (j = 0; j < rounds; j++){
    count[j] = 0;
}


main();


function main(){
    
    for (i = 0; i < size; i++){


        times = parseInt(output[i]);
        if (count[times] === 0){
            count[times] = i+1;
            lastNumber = times;
        }
        console.log(i, lastNumber);
        //console.log("SPOKEN = " + lastNumber + " COUNT = " + count);
        console.log(i + " number SPOKEN = " + lastNumber);
    }


    //console.log("\nSPOKEN = " + lastNumber + " COUNT = " + count + " TIMES = " + times + " count[times]= " + count[times]);
    console.log("PART TWO  *****");
    for (i = size ; i < rounds; i ++){
        console.log("\n" + i + " lastnumber = " + lastNumber + " COUNT = " + count + " count[times]= " + count[lastNumber]);
        //console.log("\n" + i + " lastNumber = " + lastNumber  + " count[times] = " + count[lastNumber]);
        if ((count[lastNumber] === 0)||(count[lastNumber] === i)){
            console.log("NO MATCH");
            console.log(count[lastNumber]  + " " + i);
            //count[times] = 1;           
            count[0] = i;
            
            console.log("Speaking 0 cos " + lastNumber + " is " + i + " and/or " + count[lastNumber] + " is 0");
            lastNumber = 0;
        } else {
            console.log("MATCH *****");
            console.log(lastNumber + " " + count[lastNumber]  + " " + i);
            newVal =  count[lastNumber] ;
            count[newVal] = i;
            lastNumber = newVal;
            console.log("Speaking " + lastNumber + " cos it was " + newVal);
            
        }

        console.log(i + " lastnumber = " + lastNumber + " COUNT = " + count + " count[times]= " + count[lastNumber]);

        //console.log("I " + i + " Lastnumber " + lastNumber);
        //times = count[lastNumber];
        //console.log(i + " SPOKEN = " + lastNumber + " COUNT = " + count + " TIMES = " + times + " count[times]= " + count[times]);
        //console.log("SPOKEN = " + lastNumber);
    }

    //console.log(" Count= " + count);
    
}

function countUp(){
    for (j = 0; j < rounds; j++){
        if (count[j] > 0){
            count[j] = count[j] + 1;
        }
    }
}