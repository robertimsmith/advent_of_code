var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q6.txt", "utf8");
let output = text.split("\n\n");

let i = 0;
let counter = 0;

for (i = 0; i < output.length; i++ ){
    output[i].replace(/\W/gi, '');
    counter += readGroup(output[i]);
}

console.log("FINAL COUNT = " + counter);



function readGroup(string){
    console.log("Looking at " + string);
    let i = 0;
    let count = 0;
    var flag = Array(26);
    let lines = string.split(/\r\n|\r|\n/).length
    
    console.log("It has lines = " + lines);

    for (i = 0; i < flag.length; i++){
        flag[i] = 0;
    }

    // a ascii = 97, z = 122
    for (i = 0; i < string.length; i++){
        if ((string.charCodeAt(i)>= 97) && (string.charCodeAt(i) <= 122)){
            //console.log("Character " + string.charAt(i) + " of " + string + " has value " + string.charCodeAt(i));
            //console.log("Making flag " + (string.charCodeAt(i) - 97) + " as 1");
            flag[(string.charCodeAt(i) - 97)]++;
            //console.log("Flag is " + flag);
        }
    }
    

    for (i = 0; i < flag.length; i++){
        if (flag[i] === lines){
            count++;
        }
    } 
    
    console.log(count);
    return count;
}

//part 1 = 6633
//part 2 = 3202