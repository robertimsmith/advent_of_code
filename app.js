const { count } = require("console");
var fs = require("fs");
const { parserConfiguration } = require("yargs");
var text = fs.readFileSync("./input_2020_Q3.txt", "utf8");
let output = text.split("\n");

console.log(output);

let size = 11;

let right = 3;
let down = 1;
let x = 0;
let y = 0;

let counter = 0;
let rightBoundary = output[0].length; 
console.log(rightBoundary);
let bottomRow = output.length;
console.log(bottomRow);

while (y < bottomRow){
    let hit = output[y].charAt(x);
    if (hit === '#'){
        counter++;
    }

    console.log(output[y], x, y, hit, counter);
    
    x += right;
    y += down;
    if (x>rightBoundary){
        x -= rightBoundary;
    }

}
for(y = 0; output.length; y++){
    console.log(output[y] + " " + y);
}
console.log(counter);

//not 145 too low
