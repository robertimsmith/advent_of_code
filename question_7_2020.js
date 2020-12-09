
var fs = require("fs");
const { connect } = require("http2");
var text = fs.readFileSync("./input_2020_Q7_test.txt", "utf8");
let output = text.split("\n");
let size = output.length;
let i,j, k, l, m = 0;
let searchFor = ["shiny gold"];
let counter = 0;
var first = new Array();
var second = new Array();
var third = new Array();
var fourth = new Array();
var fifth = new Array();
var commas = 0;
var added = 1;

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

console.log(output);

for (i = 0; i <output.length; i++){ 
    commas = (output[i].split(",").length - 1);
    first.push(processFirst(output[i]));
    second.push(processSecond(output[i]));
    if (commas >= 1){
        third.push(processThird(output[i]));
    } else third.push("");
    
    if (commas >= 2){
        fourth.push(processFourth(output[i]));
    } else fourth.push("");

    if (commas >= 3){
        fifth.push(processFifth(output[i]));
    }   else fifth.push(""); 
    
}

while(added === 1){
    added = 0;
    let sizeSearchFor = searchFor.length;

    for (i = 0; i < searchFor.length; i++){
        for (j = 0 ; j < size; j++){
            //console.log("\n" + first[j] + " ; " + second[j] + " ; " + third[j] + " ; "+ fourth[j] + " ; "+ fifth[j] + " ; ");

            //console.log("Is " + searchFor[i] + " in " + second[j]+ " or " + third[j]+ " or " + fourth[j]+ " or " + fifth[j]);
            if (second[j].includes(searchFor[i]) || (third[j].includes(searchFor[i]))
            || (fourth[j].includes(searchFor[i]))||(fifth[j].includes(searchFor[i]))){
                
                let check = isAlreadyThere(first[j]);
                //console.log("CHECK = " + check);
                
                if (check === 0){
                    console.log(searchFor[i] + " is in " + second[j]);
                    searchFor.push(first[j]);
                    //console.log("PUSHING" + first[j]);
                    //searchFor = [...new Set(searchFor)];
                    add = 1;
                }
            
                
            }
        }
    }
}
console.log("SEARCH FOR " + searchFor);
console.log("ANSWER 1 = " + (searchFor.length - 1));


for (i = 0; i < searchFor.length; i++){
    for (j = 0 ; j < size; j++){
        if (second[j].includes(searchFor[i])){
            myString = (second[j].replace(/\D/g,''));
            counter += parseInt(myString);
        }
        if (third[j].includes(searchFor[i])){
            myString = (third[j].replace(/\D/g,''));
            counter += parseInt(myString);
        }
        if (fourth[j].includes(searchFor[i])){
            myString = (fourth[j].replace(/\D/g,''));
            counter += parseInt(myString);
        }
        if (fifth[j].includes(searchFor[i])){
            myString = (fifth[j].replace(/\D/g,''));
            counter += parseInt(myString);
        }
    }
}

console.log("COUNT = " + counter);

counter = 0;
for (i = 0; i < searchFor.length; i++){
    for (j = 0 ; j < size; j++){
        if (first[j].includes(searchFor[i])){
            
            console.log(first[j] + " is in " + output[j]);

            myString = (second[j].replace(/\D/g,''));
            if (myString) {counter += parseInt(myString);console.log(first[j], myString);}
            myString = (third[j].replace(/\D/g,''));
            if (myString) {counter += parseInt(myString);console.log(first[j], myString);}
            myString = (fourth[j].replace(/\D/g,''));
            if (myString) {counter += parseInt(myString);console.log(first[j], myString);}
            myString = (fifth[j].replace(/\D/g,''));
            if (myString) {counter += parseInt(myString);console.log(first[j], myString);}
        }
    }
}
console.log("COUNT = " + counter);


function isAlreadyThere(string){
    for (k = 0; k < searchFor.length; k++){
        //console.log(k, string, searchFor[k]);
        if (string === searchFor[k]){
            return 1;
        }
    }
    return 0;
}

function processFirst(input){
    var containPos = input.indexOf("contain");
    var returnString = (input.substr(0, containPos-6));
    
    return returnString;
}

function processSecond(input){
    var containPos = input.indexOf("contain");
    var endPos = input.indexOf(",");
    if (endPos === -1){
        endPos = input.indexOf(".");
    }
    var returnString = input.substr(containPos + 8, endPos-containPos-8);
    return returnString;
}

function processThird(input){
    var commaPos = input.indexOf(",");
    var endPos = input.indexOf(",", commaPos+1);

    if (endPos === -1){
        endPos = input.indexOf(".");
    }
    var returnString = input.substr(commaPos+2, endPos-commaPos-2);//endPos-commaPos-4
 
    return returnString;
}

function processFourth(input){
    var commaPos = input.indexOf(",");
    commaPos = input.indexOf(",", commaPos+1);
    var endPos = input.indexOf(",", commaPos+1);

    if (endPos === -1){
        endPos = input.indexOf(".");
    }
    var returnString = input.substr(commaPos+2, endPos-commaPos-2);//endPos-commaPos-4
 
    return returnString;
}

function processFifth(input){
    var commaPos = input.indexOf(",");
    commaPos = input.indexOf(",", commaPos+1);

    commaPos = input.indexOf(",", commaPos+1);
    var endPos = input.indexOf(",", commaPos+1);

    if (endPos === -1){
        endPos = input.indexOf(".");
    }
    var returnString = input.substr(commaPos+2, endPos-commaPos-2);//endPos-commaPos-4
 
    return returnString;
}

//part 1 is 257
//part 2 136869 is too high, 1061 is not the right answer
