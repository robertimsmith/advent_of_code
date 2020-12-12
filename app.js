var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q11_test.txt", "utf8");
let output = text.split("\n");
var size = output.length;
var width = output[0].length;
var x,y;
var input = output.slice();
var previous = output.slice();


console.log(width, size);


main2();

function main2(){
    flag = 1;
    while(flag ==1) {
    for (y = 0; y < size; y++){
        for (x = 0; x < width; x++){         
            checkOccupiedTwo(y, x);
        }
    }
    for (y = 0; y < size; y++){
        console.log(input[y]);
    }

    for (i = 0; i < size; i++){
        stringInput = input[i]
        output[i] = stringInput;
    }

    for (y = 0; y < size; y++){
        for (x = 0; x < width; x++){
            
            //console.log("\nProcessing " + y, x);
            currentValue = (output[y].charAt(x));
            //console.log("Processing " + currentValue, y, x);
            checkUnOccupiedTwo(y,x);
        }
    }
    console.log("UNOCCUPIED RESULTS: ");
    for (y = 0; y < size; y++){
        console.log(input[y]);
    }

    for (i = 0; i < size; i++){
        stringInput = input[i]
        output[i] = stringInput;
    }

    changes = 0;
    for (i = 0; i < size; i++){
        stringInput = input[i];
        stringPrevious = previous[i];
        if (stringPrevious != stringInput){
            //console.log("\nPREVIOUS = " + stringPrevious + "\nINPUT = " + stringInput);
            changes++;
        }
        previous[i] = stringInput;
    }



    if (changes === 0){
        //console.log("NO CHANGE");
        flag = 0;
    }else console.log("CHANGES = " + changes);

    countStand = 0;
    for (y = 0; y < size; y++){
        for (x = 0; x < width; x++){
            if(input[y].charAt(x) === "#"){
                countStand++;
            }
        }
    }
    console.log("Part 1 STANDING = " + countStand, y ,x);
}
    //console.log("Output is " + output);
    for (y = 0; y < size; y++){
            console.log(input[y]);
        }
    
}


function checkUnOccupiedTwo(checkY, checkX){
    var counter = 0;
    scenarioDirectionX = -1;
    scenarioDirectionY = -1;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }
    
    scenarioDirectionX = -1;
    scenarioDirectionY = 0;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    
    scenarioDirectionX = -1;
    scenarioDirectionY = 1;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    
    scenarioDirectionX = -1;
    scenarioDirectionY = 0;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    
    scenarioDirectionX = 1;
    scenarioDirectionY = 0;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    
    scenarioDirectionX = -1;
    scenarioDirectionY = 1;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    
    scenarioDirectionX = 1;
    scenarioDirectionY = 0;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    
    scenarioDirectionX = 1;
    scenarioDirectionY = 1;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }



    //console.log("COUNTER= " + counter, y, x);

    //console.log("UNCOPPIED CHECK " + counter, y, x, input[y].charAt(x));
    if ((counter >= 5 )&& (input[y].charAt(x) === '#')){
        //console.log("STAND UP AT " + y,x,input[y].charAt(x));
        //console.log("CHANGING to L");
        input[y] = input[y].substring(0, x) + 'L' + input[y].substring(x + 1);
        //console.log(input[y]);
    }
}




function checkOccupiedTwo(checkY, checkX){
    var counter = 0;
    scenarioDirectionX = -1;
    scenarioDirectionY = -1;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }
    var counter = 0;
    scenarioDirectionX = -1;
    scenarioDirectionY = 0;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    var counter = 0;
    scenarioDirectionX = -1;
    scenarioDirectionY = 1;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    var counter = 0;
    scenarioDirectionX = -1;
    scenarioDirectionY = 0;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    var counter = 0;
    scenarioDirectionX = 1;
    scenarioDirectionY = 0;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    var counter = 0;
    scenarioDirectionX = -1;
    scenarioDirectionY = 1;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    var counter = 0;
    scenarioDirectionX = 1;
    scenarioDirectionY = 0;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }    var counter = 0;
    scenarioDirectionX = 1;
    scenarioDirectionY = 1;
    
    scenarioX = checkX;
    scenarioY = checkY;
    flag =1;
    while (flag = 1){
        scenarioX += scenarioDirectionX;
        scenarioY += scenarioDirectionY;
    
        if ((scenarioX < 0 ) || (scenarioX >= width) || (scenarioY < 0) || (scenarioY >= size)){
            //console.log("Hit Boundary" , scenarioY , scenarioX);
            break;
        }
        scenarioChar = output[scenarioY].charAt(scenarioX);
        if (scenarioChar === "#"){counter++; break;}
        if (scenarioChar === "L"){break;}
    }



 


    if ((counter === 0 )&& (input[y].charAt(x) === 'L')){
        //console.log("STAND UP AT " + y,x,input[y].charAt(x));
 
        input[y] = input[y].substring(0, x) + '#' + input[y].substring(x + 1);
        //console.log(input[y]);
    }
}




/* *************** */
function main(){
    flag = 1;
    while(flag ==1) {
    for (y = 0; y < size; y++){
        for (x = 0; x < width; x++){
            
            //console.log("\nProcessing " + y, x);
            currentValue = (output[y].charAt(x));
            //console.log("Processing " + currentValue, y, x);
            occupiedNo = checkOccupiedNo(y, x);
        }
    }
    for (y = 0; y < size; y++){
        //console.log(input[y]);
    }

    for (i = 0; i < size; i++){
        stringInput = input[i]
        output[i] = stringInput;
    }

    for (y = 0; y < size; y++){
        for (x = 0; x < width; x++){
            
            //console.log("\nProcessing " + y, x);
            currentValue = (output[y].charAt(x));
            //console.log("Processing " + currentValue, y, x);
            occupiedYes = checkOccupiedYes(y, x); 
        }
    }

    for (i = 0; i < size; i++){
        stringInput = input[i]
        output[i] = stringInput;
    }

    changes = 0;
    for (i = 0; i < size; i++){
        stringInput = input[i];
        stringPrevious = previous[i];
        if (stringPrevious != stringInput){
            //console.log("\nPREVIOUS = " + stringPrevious + "\nINPUT = " + stringInput);
            changes++;
        }
        previous[i] = stringInput;
    }



    if (changes === 0){
        //console.log("NO CHANGE");
        flag = 0;
    }else console.log("CHANGES = " + changes);

    countStand = 0;
    for (y = 0; y < size; y++){
        for (x = 0; x < width; x++){
            if(input[y].charAt(x) === "#"){
                countStand++;
            }
        }
    }
    console.log("Part 1 STANDING = " + countStand, y ,x);
}
    //console.log("Output is " + output);
    for (y = 0; y < size; y++){
            //console.log(input[y]);
        }
    
}




//* ************************************** */


function checkOccupiedYes(checkY, checkX){
    var counter = 0;

    scenarioX = checkX;
    scenarioY = checkY-1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = checkX;
    scenarioY = checkY+1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = x-1;
    scenarioY = y;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar);

    scenarioX = x+1;
    scenarioY = y;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = x-1;
    scenarioY = y-1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = x-1;
    scenarioY = y+1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = x+1;
    scenarioY = y-1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = x+1;
    scenarioY = y+1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    if ((counter >= 4)&& (input[y].charAt(x) === '#')){
        //console.log("STAND UP AT " + y,x,input[y].charAt(x));
 
        input[y] = input[y].substring(0, x) + 'L' + input[y].substring(x + 1);
        //console.log(input[y]);
    }
}

function checkOccupiedNo(checkY, checkX){
    var counter = 0;

    scenarioX = checkX;
    scenarioY = checkY-1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = checkX;
    scenarioY = checkY+1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = x-1;
    scenarioY = y;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar);

    scenarioX = x+1;
    scenarioY = y;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = x-1;
    scenarioY = y+1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = x-1;
    scenarioY = y-1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = x+1;
    scenarioY = y+1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);

    scenarioX = x+1;
    scenarioY = y-1;
    scenarioChar = checkAround(scenarioY, scenarioX);
    if (scenarioChar === "#"){counter++;}

    //console.log("Scenario Char = " + scenarioChar, scenarioY, scenarioX);


        
    if ((counter === 0) && (input[y].charAt(x) != '.')){
        //console.log("SITTING at " + y,x,input[y].charAt(x));
 
        input[y] = input[y].substring(0, x) + '#' + input[y].substring(x + 1);
        //console.log(input[y]);
    }
}


function checkAround(localY, localX){
    localChar = "";
    if ((localX>=0) && (localX<width) && (localY>=0) && (localY<size)){
        //console.log("LocalChar at " + localY,localX);
        localChar = output[localY].charAt(localX);
    }
    else {//console.log("Out of bounds" + localY, localX)
    }
    return localChar;
}


// part 1 answer is 2321
