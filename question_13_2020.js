var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q13.txt", "utf8");
let output = text.split("\n");
let times = output[1].split(",");
var size = times.length;
var value = 0;
var mintime = 10000;
var answer;
var remainder;
var timeStamp = 0;
var flagCount;

//console.log("OUTPUT "  + output);
//console.log("TIMES " + times);
var firstTime = parseInt(output[0]);

//console.log(firstTime);

//main();
main2();



//817440010899

function main2(){
    
    step = 1; //581610429053251;
    
    //for (i = 0; i < size; i++){
    //    if (times[i] != "x"){
     //       if (parseInt(times[i])> step) {
     //           step = parseInt(times[i]);
     //           timeStamp = i;//300000483999979}
     //       }
     //   }
        
    //}
    //step = 1;300000483999979
   
    timeStamp = 300000484000000;
    console.log("STEP = " + step);

    flagCount = 0;
    while (flagCount<size){
        flagCount = 0;
        
        if (timeStamp%1000000 == 0){console.log(timeStamp);}
            timeStamp++;
            for (i = 0; i < size; i++){
           /* 
            for (j = 0; j < i; j++){
                step =1;
                if (times[j] != "x"){
                    step *= times[j];
                }
                
            }
            console.log(i + "STEP = " + step);
            
            console.log("TIMESTAMP= " + timeStamp);
            */
            //step;
            //console.log("TIMESTAMP= " + timeStamp);

            value = Math.floor(timeStamp/times[i]);
            remainder = timeStamp%times[i]
            if(remainder > 0) {value++; /*step+=times[i];*/};
            timer = value * times[i];
            difference = timer - firstTime;
            
            total = parseInt(timer)-i;
            if ((total === timeStamp)||times[i] == "x"){
                flagCount++;
                //console.log("Counting, total = " + total);
            }
            //console.log(total);
        }

        //console.log("Flagcount " + flagCount, timeStamp);
        }
        console.log("Timestamp = " + timeStamp);
}

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
//part 2 300000000000000 too low
//      1000000000000000 not the right answer
//up to 300002211000000, 300000483999979

//      4777348064243986000 not right

