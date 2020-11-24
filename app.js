var fs = require("fs");


function input(){  
    var text = fs.readFileSync("./input_2019_Q2.txt", "utf8");
    let output = text.split(",");
    var total = 0;
    return output;
    }

function process(array){
    for(i = 0; i < (array.length); i+=4){
        if (array[i] === 99) {
            return array;
        }
        else if (array[i] === 1){
            array[array[i+3]]=array[array[i+1]] + array[array[i+2]];
        } 
        else if (array[i] === 2) {
            array[array[i+3]]=array[array[i+1]] * array[array[i+2]];
        }
    }    
return array;
}

function process1(array){
    var i = 0;
    while (array[i]!==99){
        if (array[i] === 1){
            array[array[i+3]]=array[i+1] + array[i+2];
        } 
        else if (array[i] === 2) {
            array[array[i+3]]=array[i+1] * array[i+2];
        }
        i += 4;
        if (i>array.length){break;};
    }
    return array;
}


let rawoutput = input();
let output = rawoutput.map(Number);

console.log('2, 0, 0, 0, 99 = ' + process([1,0,0,0,99]));
console.log('2, 3, 0, 6, 99 = ' + process([2,3,0,3,99]));
console.log('2, 4, 4, 5, 99, 9801 = ' + process([2,4,4,5,99, 0]));
console.log('30, 1, 1, 4, 2, 5, 6, 0, 99 = ' + process([1,1,1,4,99, 5, 6, 0, 99]));



output[1] = 12;
output[2] = 2;
//console.log('Output = ' + output);
let result = process(output);

console.log('position 0 = ' + result[0]);
// answer 6087827
let program = [2, 2, 2, 6, 99, 0];
let results = process1(program);
console.log(program + ' results in ' + results);

//[opcode, input1, input2, outputposition]
let answer = 19690720;
let count1, count2, count3 =0;
for (count1 = 0; count1<100; count1++){
    for (count2 = 0; count2<100; count2++){
            for (count3 = 1; count3<=2; count3++){
                program[0] = count3;
                program[1] = count1;
                program[2] = count2;
            
                results = process1(program);
                calculated = 100 * results[1] + results[2];
                if (results[5]===answer){
                    console.log("Solution is when " + results);
                }
            //console.log(calculated);
            console.log(count1 + ' ' + count2 + ' ' + results);
        }
    }
}
