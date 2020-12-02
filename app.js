var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q2.txt", "utf8");
let output = text.split("\n");
let min, max, hits = 0;
let char = '';
let pass = 0;
let valid = 0;
let valid2 = 0;


for(i = 0; i < output.length; i++){
    let first = output[i].indexOf("-");
    min = output[i].substring(0, (first));
    let second = output[i].indexOf(":");
    max = output[i].substring(first+1, second-first);

    char = output[i].charAt(second - 1);
    
    for(j = 7; j < output[i].length; j++){
        if (output[i].charAt(j)==char){
            hits++;
        }
    }
    
    if ((hits >= min) && (hits <=max)){
        pass = 1;
    }
    
    if (pass){
        valid++;
    }

    let pos1 = parseInt(min) + parseInt(second) + 1;
    let charpos1 = output[i].charAt(pos1);

    let pos2 = parseInt(max) + parseInt(second) + 1;
    let charpos2 = output[i].charAt(pos2);

    if (((charpos1===char)+(charpos2===char))===1){
        valid2++;
    }

    pass = 0;
    hits = 0;

}
console.log("Valid passwords = " + valid);
console.log("Valid2 passwords = " + valid2);

//660 part 1
//530 part 2

