/*Fuel required to launch a given module is based on its mass. 
Specifically, to find the fuel required for a module, 
take its mass, divide by three, round down, and subtract 2.*/

//https://adventofcode.com/2019/day/1/answer

function fuel(mass){
    var fuel = (Math.floor(mass/3))-2;
    return fuel;
    }
    
function question(){
    console.log ("Mass 12 has fuel " + fuel(12));
    console.log ("Mass 14 has fuel " + fuel(14));
    console.log ("Mass 1969 has fuel " + fuel(1969));
    console.log ("Mass 100756 has fuel " + fuel(100756));
    console.log ("Mass 81018 has fuel " + fuel(81018));
    
    var fs = require("fs");
    var text = fs.readFileSync("./input_2019_Q1.txt", "utf8");
    let output = text.split("\n");
    var total = 0;
    for(i = 0; i < output.length; i++){
        total+=fuel(output[i]);
    }
    console.log("Total fuel = " + total);
    }

    question();