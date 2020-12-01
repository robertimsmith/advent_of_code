var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q1.txt", "utf8");
let output = text.split("\n");


for(i = 0; i < output.length; i++){
    for(j = 0; j < output.length; j++)
    {
        a = parseInt(output[i]);
        b = parseInt(output[j]);
        if ((a+b)===2020){
            answer = a*b;
            console.log(a,b, answer);
        }
    }
}
//Your puzzle answer was 482811.

//part 2


for(i = 0; i < output.length; i++){
    for(j = 0; j < output.length; j++){
        for(k = 0; k < output.length; k++){
            a = parseInt(output[i]);
            b = parseInt(output[j]);
            c = parseInt(output[k]);
        if ((a+b+c)===2020){
            answer = a*b*c;
            console.log(a,b, c, answer);
           }
        }
    }
}

//Answer = 193171814
