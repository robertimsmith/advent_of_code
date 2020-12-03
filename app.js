var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q3.txt", "utf8");
let output = text.split("\n");

slopes = [1,1,3,1,5,1,7,1,1,2];//2, 7, 3, 4, and 2
answer = [0,0,0,0,0];

for (i = 0; i <= 4; i++){
    let a = i * 2;
    let b = i * 2 + 1;
    answer[i] = calc(slopes[a], slopes[b]);   
}
let final = 1; 
for (i = 0; i <= 4; i++){
    final = final * answer[i];
} 
console.log(final);

function calc(right, down){
    let x = 0;
    let y = 0;

    let counter = 0;
    let rightBoundary = output[0].length; 
    //console.log(rightBoundary);
    let bottomRow = output.length;
    //console.log(bottomRow);

    while (y < bottomRow){
        let hit = output[y].charAt(x);
        if (hit === '#'){
            counter++;
        }

        //console.log(output[y] + " " + x  + " " +  y  + " " +  hit  + " " +  counter);
        
        x += right;
        y += down;
        if (x>=rightBoundary){
            x -= rightBoundary;
        }

    }
//    for(y = 0; y < output.length; y++){
//        console.log(output[y] + " " + y);
//    }
    return (counter);
}
// part 1 151
// part 2 7540141059
