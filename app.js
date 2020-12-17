const { ok } = require("assert");
var fs = require("fs");
const { checkServerIdentity } = require("tls");
const { string } = require("yargs");
var text = fs.readFileSync("./input_2020_Q16_1.txt", "utf8");
let validInput = text.split("\n");
var text = fs.readFileSync("./input_2020_Q16_2.txt", "utf8");
let yourTicketInput = text.split(",");
var text = fs.readFileSync("./input_2020_Q16_3.txt", "utf8");
let nearbyTicketInput = text.split("\n");
var x = "";
let pairedInt = new Array(validInput.length*2);
let listOfValidInt = new Array(975);
var OK = 0;
var NotOK = 0;
for (i = 0; i < listOfValidInt.length; i++){
    listOfValidInt[i] = 0;
}
    
    
//console.log("\n" + validInput);
//console.log("\n" + yourTicketInput);
//console.log("\n" + nearbyTicketInput);


main();

function main(){
    
    let validInputResults = processValidInput();
    getInt(validInputResults);
    console.log("\n" + listOfValidInt);
    processTicketInput();
    processNearbyTicketInput();
    console.log("OK = " + OK + " NOT OK = " + NotOK);
    console.log(NotOK/(OK+NotOK));
}


function processTicketInput(){
    var checkIntegerString = "";
    //console.log(nearbyTicketInput);
    
    for (i = 0; i < nearbyTicketInput.length; i++){
        console.log(i, nearbyTicketInput[i]);
        var stringsearch = ",";
        var count = 0;
        str = nearbyTicketInput[i];
        for(var j=0; j<str.length; j++){
            if (stringsearch===str[j]){
                count++;
            }
        }
        console.log(count);
        str = nearbyTicketInput[i];

        
        for (k = 0; k < count; k++){
            var flag = 1;
            //console.log(str);
            
            checkIntegerString = parseInt(str.substr(0, str.indexOf(",")));
            console.log("CHECK INTEGERSTRING " + checkIntegerString, listOfValidInt[checkIntegerString]);

            if (listOfValidInt[checkIntegerString] === 0){              
                flag = 0;
                console.log("NO MATCH!!!");
            }
            //console.log(k, checkIntegerString);
            str = str.substr(str.indexOf(",")+1);
            //console.log(k, str);
        }
        if (flag===1){
            console.log("OK!!");
            OK++;
        } else {
            console.log("NO MATCH!!!");
            NotOK++
        }
    }

}

function processValidInput(){
    let validInputString = new Array(validInput.length);
    let j = 0;
    var string;

    for (i = 0; i < validInput.length; i++){
        
        //console.log("\nProcessing " + j, validInput[j], validInput[j].indexOf(":"), validInput[j].indexOf("or"));
        string = stripAway(validInput[j]);
        //console.log("STRING= " + string);
        
        string = string.substring(string.indexOf(":")+1);
        validInputString[j] = string;
        //console.log(j, "Valid string = " + validInputString[j]);
        j++;
        
    }
    return validInputString;
}

function stripAway(x){
    //console.log("STRING= " + x);
    x = x.replace(" or ", ";");
    //console.log("STRING " + x);
    x = x.replace(/[a-zA-Z ]/g, "");
    //console.log("STRING " + x);
    return x;
}

function getInt(validInputResults){
    var firstPairString = "";
    var secondPairString = "";
    var firstInt = 0;
    var secondInt = 0;
    var maxInt = 0;

    for ( i = 0; i < validInputResults.length; i++){
        //console.log(validInputResults[i]);
        firstPairString = validInputResults[i].substr(0, validInputResults[i].indexOf(";"));
        //console.log("FIRSTPAIRSTRING " + firstPairString + " INT " + firstPairString.substr(0, firstPairString.indexOf("-")) + " index of  " + firstPairString.indexOf("-"));

        firstInt = parseInt(firstPairString.substr(0, firstPairString.indexOf("-")));
        secondInt = parseInt(firstPairString.substr(firstPairString.indexOf("-")+1));
        //console.log("first " + firstInt + " 2nd "  + secondInt);


        if (firstInt > maxInt) { maxInt = firstInt};
        if (secondInt > maxInt){ maxInt = secondInt};
        //console.log(validInputResults[i]);
        firstPairString = validInputResults[i].substr(validInputResults[i].indexOf(";")+1);
        //console.log("FIRSTPAIRSTRING " + firstPairString + " INT " + firstPairString.substr(0, firstPairString.indexOf("-")) + " index of  " + firstPairString.indexOf("-"));
        pairedInt.push(firstInt);
        pairedInt.push(secondInt);
 
        for (i = firstInt; i < secondInt; i++){
            listOfValidInt[i] = 1;
            //console.log(i, firstInt, secondInt);
        }

        firstInt = parseInt(firstPairString.substr(0, firstPairString.indexOf("-")));
        secondInt = parseInt(firstPairString.substr(firstPairString.indexOf("-")+1));
        //console.log("first " + firstInt + " 2nd "  + secondInt);
        if (firstInt > maxInt) { maxInt = firstInt};
        if (secondInt > maxInt){ maxInt = secondInt};

        for (i = firstInt; i <= secondInt; i++){
            listOfValidInt[i] = 1;
            //console.log(i, firstInt, secondInt);
        }
    }
    console.log("MaxInt = " + maxInt);
 


}



function processNearbyTicketInput(){

}