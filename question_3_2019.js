//var test1a = ["R75","D30"];
var test1a = ["R75","D30","R83","U83","L12","D49","R71","U7","L72"]; //159
var test1b = ["U62","R66","U55","R34","D71","R55","D58","R83"]; //135

let maxSize = 1000;
let grida = []; //interpret array as 0 to maxSize-1 is row 1, maxSize to (2 * maxSize)-1 is row 2, (2 * maxSize)+1 etc  
let x, y, i = 0;

for (x = 0; x < maxSize; x++){
    for (y = 0; y < maxSize; y++){
        grida[x + y * maxSize ] = 0;
    }
} 

// array, starting point coords, 1st or 2nd path
function process(path, x, y, cycle){
    if (cycle === 2){
        change = 10;
    } 
    else change = 1;

    for (i = 0; i < path.length; i++){
        let direction = path[i].slice(0,1);
        let distance = path[i].slice(1);
        if (direction === "R"){
            for (j = 0; j < parseInt(distance)+1; j++){
                //console.log([x + y * maxSize + j]);
                x++;
                grida [x + y * maxSize] += change;
            }
        }
        if (direction === "L"){
            for (j = 0; j < parseInt(distance)+1; j++){
                //console.log([x + y * maxSize - j]);
                x--;
                grida [x + y * maxSize] += change;
            }
        }
        if (direction === "U"){
            for (j = 0; j < parseInt(distance)+1; j++){
                //console.log([x + (y + j) * maxSize]);
                y++;
                grida [x + y * maxSize] += change;
            }
        }
        if (direction === "D"){
            for (j = 0; j < parseInt(distance)+1; j++){
                //console.log([x + (y - j) * maxSize]);
                y--;
                grida [x + y * maxSize] += change;
            }
        }
        console.log("Direction " + direction + ",Distance " + distance);
    }
    console.log("X = " + x + ", Y = " + y);
}

//console.log (grida);
let startX = 10;
let startY = 900;
let manhattanDistance = 0;

process(test1a, startX, startY, 1);
process(test1b, startX, startY, 2);
//console.log (result);

for (x = 0; x < maxSize; x++){
    for (y = 0; y < maxSize; y++){
        if (grida[x + y * maxSize ]===11) {
            manhattanDistance = Math.abs(x-startX)+Math.abs(y-startY);
            console.log("X = " + x + ", Y = " + y + ", Value = " + manhattanDistance);

        }
    }
}
