var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q13.txt", "utf8");
let output = text.split("\n");
let times = output[1].split(",");
var size = times.length;
var value = 0;
var mintime = 10000;
var answer;
var remainder;

console.log("OUTPUT "  + output);
console.log("TIMES " + times);
var firstTime = parseInt(output[0]);

console.log(firstTime);

main();


function main(){
    for (i = 0; i < size; i++){
        value = Math.floor(firstTime/times[i]);
        remainder = firstTime%times[i]
        if(remainder > 0) {value++};
        timer = value * times[i];
        difference = timer - firstTime;
        
        if (difference<mintime){
            mintime=difference;
            answer = difference*times[i];
        };
        console.log("TIMES[i] "+ times[i] + " value " + value + " remainder " + remainder + " timer " + timer, + " difference " + difference + " mintime " +  mintime + " answer " +  answer);

    }
    console.log("ANSWER= " + answer);

}

//part 1 = 2238