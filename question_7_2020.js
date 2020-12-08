
var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q7_test.txt", "utf8");
let output = text.split("\n");
let size = output.length;
let i,j, k, l, m = 0;
let searchFor = ["shinygold"];
let counter = 0;

/*light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.
*/

//console.log(output);
let flag = 0;
do {
    flag = searchFor.length;
for (i = 0; i < output.length; i++){
    console.log("\nProcessing " + output[i] + " " + i);
    checkList = [];
    first = cleanit(readFirst(output[i]));
    newString = (output[i].substring(output[i].indexOf("contain")+8));
    //console.log("NEWSTRING= " + newString);
    //console.log(newString.indexOf("no other bags"));

    if (newString.indexOf("no other bags") < 0){
        let commas = (newString.match(/,/g) || []).length;
        //console.log("COMMAS = " + commas);
        for (j = 0; j < commas; j++){
            let nextString = newString.substr(0, newString.indexOf(","));
            checkList.push(nextString);
            //console.log("PUSHING nextstring" + nextString );
            newString = newString.substr(newString.indexOf(",")+1);
        }
        checkList.push(newString);
        //console.log("PUSHING newstring" + newString);
    }
    //console.log("Checklist= " + checkList);
    for (k = 0 ; k < checkList.length; k++){
        checkList[k] = cleanit(checkList[k]);
    }
    //console.log("Cleaned checklist= " + checkList);
    //console.log("SearchFor = " + searchFor);
    //console.log("Checklist = " + checkList);

    for (l = 0 ; l < checkList.length; l++){
        for (m = 0; m < searchFor.length; m++){
            //console.log("L= " + l + "Checklist= " +checkList[l] + " M= " + m + " searchFor = " + searchFor[m]);
            if (checkList[l] === searchFor[m]){
                searchFor.push(first);
                console.log("Pushing first " + first);
                console.log(output[i]);
                console.log(checkList[l]);
                let matcher = checkList[l];
                let stringText = output[i].replace(/\s/g, '');
                console.log("Matcher is " + matcher + " StringText is " + stringText);
                console.log (stringText);
                let bagString = stringText.substring(stringText.indexOf(matcher)-3);
                bagString = bagString.replace(/[^\d]/g, '')
                let value = parseInt(bagString);
                counter += value;
                
                console.log("Bagstring is " + bagString);
                console.log("Value is " + value);
                console.log("Counter = " + counter);
                //console.log("SearchFor= " + searchFor);
            }
        }
    }
}
//console.log("Compare = " + searchFor);
//console.log("Flag= " + flag);
searchFor = [...new Set(searchFor)];
//console.log("Compare = " + searchFor);
}while(flag != searchFor.length);

searchFor = cleanup(searchFor);
uniques = [...new Set(searchFor)];


let answer = parseInt(uniques.length) - 1;
console.log("Number of matches = " + answer);

function readFirst(text){
    first = text.substr(0,text.indexOf("contain"));    
    return first;
}

function readMore(text){
    result = "EMPTY";
    if (text.indexOf("no other bags")>0){
        return result;
    }
    //console.log("CHECKING " + text);
    second = text.substr(text.indexOf("contain")+9);
    //console.log("Second = " + second);
    return (second);
}

function cleanup(input){
    for ( i=0; i<input.length;i++ ){
        input[i] = input[i].replace(/\d/g,'');
        input[i] = input[i].replace(/\s/g, '');
        input[i] = input[i].replace('.', '');
        input[i] = input[i].replace('bags', '');
        input[i] = input[i].replace('bag', '');
        //console.log(i, searchFor[i]);
    }
    return input;
}

function cleanit(input){
 
    input = input.replace(/\d/g,'');
    input = input.replace(/\s/g, '');
    input = input.replace('.', '');
    input = input.replace('bags', '');
    input = input.replace('bag', '');

    return input;
}

//part 1 is 257
//part 2 1668837 is too high