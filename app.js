
var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q9.txt", "utf8");
let output = text.split("\n");
let size = output.length;
var lastCode;
var i, j, k, l;
let partOne = 0;

if (size === 20){
    lastCode = 5;
}
else lastCode = 25;

console.log(lastCode);

main();


function main(){
    for (i =lastCode; i<size; i++){
        if (check(i) === 0){
            partOne = parseInt(output[i]);
            console.log("Part 1 Entry " + i + " with VALUE " + partOne);
        };

    }

check2(i);


}

function check(value){
    let checkValue = parseInt(output[value]);
    for (j = value - lastCode; j < value; j++){
        for (k = j + 1; k < value; k++){
            let total = parseInt(output[j]) + parseInt(output[k]);
            //console.log(j, k, total, checkValue);
            if (total === checkValue){
                //console.log("MATCH FOUND");
                return 1;
            }
        }
    }
    
    console.log("MATCH NOT FOUND");
    return 0;

}


function check2(value){
    let checkValue = parseInt(output[value]);
    for (j = 0; j < size; j++){
        let total = parseInt(output[j]);
        for (k = j + 1; k < size; k++){
            total += parseInt(output[k]);
            //console.log(i, j, k, total);
            //console.log(j, k, total);
            if (total === partOne){
                let partTwo = weakness(j, k);
                console.log("MATCH FOUND " + partTwo);
                return 1;
            }
        }
    }
    
    //console.log("MATCH NOT FOUND");
    //console.log(j, k, checkValue);
    return 0;

}
function weakness(j, k){
    let smallest = parseInt(output[j]);
    let biggest = parseInt(output[j]);
    //console.log("SMALLEST = " + smallest + " BIGGEST = " + biggest);

    for (l = j; l <=k; l++){
        if (parseInt(output[l])>biggest)
            {
                biggest = parseInt(output[l]);
            }
            
        if (parseInt(output[l])<smallest)
            {
                smallest = parseInt(output[l]);
            }
        }
        console.log("SMALLEST = " + smallest + " BIGGEST = " + biggest + " TOTAL = " + (smallest+biggest));
        return (smallest+biggest);
    }
    

//part 1 is 57195069
//part 2 is 7409241

