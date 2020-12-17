var fs = require("fs");
const { connect } = require("http2");
var text = fs.readFileSync("./input_2020_Q14.txt", "utf8");
let output = text.split("\n");
var size = output.length;
var mask = "";
var stringRead = "";
console.log(output);
let result = new Array(size);
let ram = new Array(1000000);
main();


function main(){
    console.log("2 to 35 = " + Math.pow(2, 35));
    mask = "";
    for (i = 0; i < size ; i++){
        stringRead = output[i];
        if (stringRead.includes("mask")){
            mask = stringRead.replace("mask = ", '');
        }
        console.log("\nMASK = " + mask);
        
        flag = 0;
        while(flag == 0){
            flag = 1;
            if ((i+1) < size){
                valueString = output[i+1];
                console.log("ValueString = " + valueString);
                if (valueString.includes("mask")){
                    flag = 1;
                    break;
                }
                memoryLocation = parseInt(valueString.substring(valueString.indexOf("[")+1,valueString.indexOf("]") ));
                //console.log("Memory location = " + memoryLocation);
                writeValue = parseInt(valueString.substring(valueString.indexOf("=")+2));
                writeValueString = "";
                //convert writeValue into binary
                for (j = 0; j < mask.length; j++){
                    //console.log("J= " + j + " mask = " + mask[j] + " Memory Location = " + memoryLocation + " Value = " + paddedValue[j]);
                    a = Math.pow(2, 35-j);
                    x = Math.floor(writeValue/a);
                    //console.log("j " + j + " x " + x + " a " + a);
                    writeValue -= a * x;
                    writeValueString += x;
                    //console.log("WriteValueString" + writeValueString);
                }


/*
                paddedLength = 37 - writeValue.length;                
                paddedValue = "000000000000000000000000000000000000";
                paddedValue = paddedValue.substring(1,paddedLength);
                paddedValue = paddedValue + writeValue;  
  */              
                //console.log("substring size " +  paddedValue.length);
                //console.log("writeValue = " + writeValue + " paddedValue = " + paddedValue);

                // mask = mask,  paddedvalue = value
                for (j = 0; j < mask.length; j++){
                    //console.log("J= " + j + " mask = " + mask[j] + " Memory Location = " + memoryLocation + " Value = " + paddedValue[j]);
                    if (mask[j] === "X"){
                        result[j] = writeValueString[j];
                    } else {
                        result[j] = mask[j];
                    }
                }
                console.log("RESULT = " + result);
                resultString = "";
                resultValue = 0;
                for (j = 0; j < result.length; j++){
                    resultString = resultString + result[j];
                    if (result[j] === "1"){
                        resultValue += Math.pow(2, 35-j);
                        //console.log(j, 36-j, resultValue, Math.pow(2, 36-j));
                    }
                }
                //console.log("String = " + resultString + " value= " + resultValue);
                console.log("memory " + memoryLocation + " value " + resultValue);
                ram[memoryLocation] = resultValue;
                console.log (ram[memoryLocation]);
            } 
        }
    }
    console.log("CALC");
    //console.log(ram);
    x = 0;
    for (k = 0; k < ram.length ; k++){
        //console.log(k, ram[k]);
        if (ram[k]){x += ram[k];}
        
    }
    console.log("Memory total = " + x); 
}

// part 1 = 8566770985168
