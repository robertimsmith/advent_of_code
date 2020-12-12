var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q12.txt", "utf8");
let output = text.split("\n");
var size = output.length;
var direction = 0;
var x = 0;
var y = 0;
var a = 10;
var b = 1;
var rotation;

console.log("X= " + x + " Y= " + y + " A= " + a + " B= " + b); 
main2()
//main();
console.log("X= " + x + " Y= " + y + " Distance= "  + (Math.abs(x)+Math.abs(y)));

function main2(){

    for ( i = 0; i < size; i++){
        var commander =  output[i].charAt(0);
        var distance =  parseInt(output[i].replace(/\D/g,''));
        var oldA, oldB;
        console.log ("\n", commander, distance);

        if (commander == "F"){
            console.log("FORWARD");
            x += (a * distance);
            y += (b * distance);
        }
        console.log(commander);

        //oldA = Math.abs(a);
        //oldB = Math.abs(b);
        oldA = a;
        oldB = b;


        switch (commander){
            case "L":
                rotation = rotateWay(distance);
                //b = -oldA;
                //a = oldB;
                console.log("Rotation= " + rotation);

                if (rotation == 0){a = oldA; b = oldB;}
                if (rotation == 1){a = -oldB; b = oldA;}
                if (rotation == 2){a = -oldA; b = -oldB;}
                if (rotation == 3){a = oldB; b = -oldA;}

                console.log("ROTATING*************");
            break;

            case "R":
                rotation = rotateWay(distance);
                //b = -oldA;
                //a = oldB;
                console.log("Rotation= " + rotation);

                if (rotation == 0){a = oldA; b = oldB;}
                if (rotation == 1){a = oldB; b = -oldA;}
                if (rotation == 2){a = -oldA; b = -oldB;}
                if (rotation == 3){a = -oldB; b = oldA;}
                
              console.log("ROTATING**************");
            break;

            case "N":
                b += distance;
                //console.log("GOING NORTH " + distance);
            break;

            case "S":
                b -= distance;
                //console.log("GOING SOUTH" + distance);
            break;

            case "E":
                a += distance;
                //console.log("GOING EAST " + distance);
            break;

            case "W":
                a -= distance;
                //console.log("GOING WEST " + distance);
            break;

            default: 
                                            
        }

        console.log("X= " + x + " Y= " + y + " A= " + a + " B= " + b); 
    }
}



function rotateWay(distance){

    var rotateBy = Math.round(distance/90);
    console.log("Direction= " + direction + " ROTATEBY= " + rotateBy);
    direction += rotateBy;  

    while (direction > 3){
        direction -= 4;
    }

    while (direction < 0){
        direction += 4;
    }
    
    console.log("Direction= " + direction);
    return rotateBy;
}




/* ******************************** */




function main(){
    for ( i = 0; i < size; i++){
        var commander =  output[i].charAt(0);
        var distance =  parseInt(output[i].replace(/\D/g,''));
       
        console.log ("\n", commander, distance);

         if (commander == "F"){
             commander = forward(direction);
             console.log("COMMANDER = ", commander);
         }
         console.log(commander);

         switch (commander){
            case "L":
                direction = rotate(-distance);
                console.log("ROTATING*************");
            break;

            case "R":
                direction = rotate(distance);
                console.log("ROTATING**************");
            break;

            case "N":
                y += distance;
                //console.log("GOING NORTH " + distance);
            break;

            case "S":
                y -= distance;
                //console.log("GOING SOUTH" + distance);
            break;

            case "E":
                x += distance;
                //console.log("GOING EAST " + distance);
            break;

            case "W":
                x -= distance;
                //console.log("GOING WEST " + distance);
            break;

            default: 
                                             
         }
         console.log("X= " + x + " Y= " + y); 
    }
}

function rotate(distance){

    var rotateBy = Math.round(distance/90);
    console.log("ROTATEBY= " + rotateBy);
    direction += rotateBy;  
 

    while (direction > 3){
        direction -= 4;
    }

    while (direction < 0){
        direction += 4;
    }
    console.log(direction);
    return direction;
}

function forward(direction){
    console.log("FORWARD");
    if (direction == 0){
        commander = "N";
    }else if (direction == 1){
        commander = "E";
    }else if (direction == 2){
        commander = "S";
    }else if (direction == 3){
        commander = "W";
    }else console.log("ERROR! ", direction);

    console.log(commander);
    return(commander);
}

//part 1 is 1956
//part 2 is 126797
