var fs = require("fs");
const { array } = require("yargs");
var text = fs.readFileSync("./input_2020_Q8.txt", "utf8");
let output = text.split("\n");
let size = output.length;
let i,j, k, l, m = 0;
var flag = new Array();
var acc = 0; 
var command = 0;
let change = 0;

for (i = 0; i < size; i++){
    flag[i] = 0;
    //console.log(i, flag[i]);
}

//console.log(output);
//console.log(flag);

for (j = 0; j < size; j++){
    execute(j);
}



console.log("ACCUMULATOR= " + acc);

function parse(command, commandChange){
    let instruction = output[command].substr(0,3);
    let value = parseInt(output[command].substr(4,4));
    if (instruction === size){
        console.log("TERMINATED!!!!!");
        console.log("ACC = " + acc);
        return -1;

    }
    if (flag[command] === 1){
        //console.log("Command has been run = " + command + " failed with " + j + "*********");
        return -1;
    }
    flag[command] = 1;


    //console.log("CommandChange " + commandChange + " command= " + command + " change = " + change);
    if ((commandChange == command) && (change == 0)){
        if (instruction == "nop"){
            instruction = "jmp";
            change = 1;
            //console.log("SWITCHING " + command + " to JMP **********");
        }
        else if (instruction == "jmp"){
        instruction = "nop";
        change = 1;
        //console.log("SWITCHING " + command + " to NOP   **********");
        }
    }




    //console.log("instruction = " + instruction);
    //console.log("value = " + value);

    if (instruction === "nop"){
        //console.log("NOP");
        return (command+1);
    }

    if (instruction === "acc"){  
        acc += value;
        //console.log("ACC" + " value= " + value + " ACC= " + acc);
        return (command+1);
    }

    if (instruction === "jmp"){
        command += value;
        //console.log("JMP" + " value= " + value + " COMMAND= " + command);
        return (command);
    }
}


function execute(commandChange){
    command = 0;
    acc = 0;
    change = 0;

    for (i = 0; i < size; i++){
        flag[i] = 0;
        //console.log(i, flag[i]);
    }
    //console.log("RUNNING WITH CHANGE to " + commandChange);

    while (command >= 0 ){
        //console.log("\nCOMMAND " + command);
        if (command >= size){
            console.log("TERMINATED!!!!!");
            console.log("ACC = " + acc);
            break;
        }
        command = parse(command, commandChange);
        //console.log("RETURNS " + command); 
        //console.log("ACCUMULATOR= " + acc);    
    }
}
//part 1 is 1584
//part 2 is 920
