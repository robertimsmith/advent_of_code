var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q10_test2.txt", "utf8");
let output = text.split("\n");
let size = output.length;
var i, j, l = 0;
var start = 0;
var counter = [0,0,0,0];
jolts = [0,0,0];
var biggest = 0;
cleanUp();

main2(output);


function main2(input){
    var data = [];
    var length = size; // user defined length
    var bin = 0;
    var binMax = 0;
    var binMax = (Math.pow(2, size+1));
    console.log (bin, binMax);

    for(var i = 0; i < length; i++) {
        data.push(start);
    }

    
    input.sort(function(a, b){
        return a - b;
    });
    console.log("input is " + input);

    value = 0;
    count = 0;
    for (i = 0; i < binMax; i++){
        data[0] = data[0] + 1;
        for (j = 0; j < size; j++){
            if (data[j]>1){
                data[j] = 0;
                if (j+1<size){
                    data[j+1] = data[j+1] + 1;
                }
                
            }
        }
        if (isValid(data, input)){
            count++;           
        }
        //console.log(count);
        
   }
   //console.log(data);
   console.log("COUNT = " + count);
}

 
       

    //test 2 ans = 19208
    //test ans = 8


function isValid(data, test)
{
    let value = 0;
    let low = 0;
    let high = 0;
    for (l = 1; l < size-1; l++){
        low = data[l] * test[l];
        high = data[l+1] * test[l+1];
        let difference = high - low;
        if ((difference > 3 )||(difference==0)){
            //console.log("INVALID", l, low, high, difference);
            return 0;
        }
    }
    //console.log("VALID", data);
    return 1;
}

function main(input){
    input.sort(function(a, b){
        return a - b;
    });
    let value = start;
    let flag = 1;
    //console.log(input);

    while(flag ===1){
        flag = 0;
        for(i = 0; i < size; i++){
            difference = (input[i] - value);
            //console.log(i, difference);

            if (difference == 1){
                jolts[0] = jolts[0] + 1;
                value = input[i];
                flag = 1;
                //console.log("difference 1 " + value);
            }
            else if (difference == 2){
                jolts[1] = jolts[1] + 1;
                value = input[i];
                flag = 1;
                //console.log("difference 2 " + value);
            }
            else if (difference == 3){
                jolts[2] = jolts[2] + 1;  
                value = input[i];
                flag = 1;
                //console.log("difference 3 " + value);
            }
            
        }
    }

console.log("Biggest= " + biggest);
console.log(jolts);
let answer = jolts[0] * jolts[2];
console.log("ANSWER= " + answer); //should be 7 * 5, 35
}

function getBiggest(input){
let big = input[0]
    for(i = 1; i < size; i++){
        if (input[i] > big) {
            big = input[i];
        }
    }
    return big + 3;
}

function cleanUp(){
    
    for(i = 0; i < size; i++){
        output[i] = parseInt(output[i]);
    }
    biggest = getBiggest(output);
    output.push(biggest);
    size++;

    for(i = 0; i < size; i++){
        //console.log(i, output[i]);
    }
}

// part 1 = 2040
// part 2 268959745 is too low