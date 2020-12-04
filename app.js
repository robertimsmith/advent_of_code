var fs = require("fs");
var text = fs.readFileSync("./input_2020_Q4.txt", "utf8");
let output = text.split("\n\n");


check(output);

function check(input){
    let valid = 0;
    for (i = 0; i < input.length;i++){
        let byr, iyr, eyr, hgt, hcl, ecl, pid, cid = 0;
        byr = confirm("byr", input[i]);
        iyr = confirm("iyr", input[i]);
        eyr = confirm("eyr", input[i]);
        hgt = confirm("hgt", input[i]);
        hcl = confirm("hcl", input[i]);
        ecl = confirm("ecl", input[i]);
        pid = confirm("pid", input[i]);
        cid = confirm("cid", input[i]);
        //console.log(i, valid, byr, iyr, eyr, hgt, hcl, ecl, pid, cid);
        if (byr && iyr && eyr && hgt && hcl && ecl && pid){
            //console.log("***VALID***");
            //console.log(input[i]);
            //console.log(byr, iyr, eyr, hgt, hcl, ecl, pid, cid, valid);
            valid++;
        }
    }
    console.log("VALID = " + valid);
}

function confirm(value, string){
 //   console.log("\n\nCHECKING " + value + "\n String = @" + string + "*\n Match = " + string.includes(value));
    if (string.includes(value)){
        if (value == "byr"){
            let byrval = string.substr(string.indexOf(value)+4,4);
            if ((parseInt(byrval) >= 1920) && (parseInt(byrval) <= 2002)){
                //console.log(byrval);
                return 1;
            }
        }

        if (value == "iyr"){
            let iyrval = string.substr(string.indexOf(value)+4,4);
            if ((parseInt(iyrval) >= 2010) && (parseInt(iyrval) <= 2020)){
                //console.log(iyrval);
                return 1;
            }
        }

        if (value == "eyr"){
            let eyrval = string.substr(string.indexOf(value)+4,4);
            if ((parseInt(eyrval) >= 2020) && (parseInt(eyrval) <= 2030)){
                //console.log(eyrval);
                return 1;
            }
        }

        if (value == "hgt"){
            let hgtval = string.substr(string.indexOf(value)+4,4);

            if (hgtval.includes("i")){
                hgtvalcalc = hgtval.substr(0, hgtval.indexOf("i"));
                if((parseInt(hgtvalcalc)>=59)&&(parseInt(hgtvalcalc)<=76)){
                    //console.log(hgtval);
                    return 1;
                }
            }
            if (hgtval.includes("c")){
                hgtvalcalc = hgtval.substr(0, hgtval.indexOf("c"));
                if((parseInt(hgtvalcalc)>=150)&&(parseInt(hgtvalcalc)<=193)){
                    //console.log(hgtval);
                    return 1;
                }
            }
            
        }

        if (value == "hcl"){
            let hclval = string.substr(string.indexOf(value)+4,7);
            //console.log("\n\nTESTING " + hclval);
            if(hclval.charAt(0)==="#"){
                hclvalcalc = hclval.substr(1);
                //console.log("CUT STRING = " + hclval);
                if(hclvalcalc.match(/^([a-f0-9]{6})/)){
                    //console.log(hclval);
                    return 1;
                }
            };

        }

        if (value == "ecl"){
            let eclval = string.substr(string.indexOf(value)+4,3);
            if ((eclval.match(/amb/g))
            || (eclval.match(/blu/g))
            || (eclval.match(/brn/g))
            || (eclval.match(/gry/g))
            || (eclval.match(/grn/g))
            || (eclval.match(/hzl/g))
            || (eclval.match(/oth/g))){
                //console.log(eclval);
                return 1;
            }
        }

        if (value == "pid"){
            let pidval = string.substr(string.indexOf(value)+4,9);
            if(pidval.match(/^([0-9]{9})/)){
                return 1;
            };
        }

        if (value == "cid"){
                return 1;
            }


    }
    //console.log("MISMATCH");
    return 0;
}

// 146 is too high
// byr 1920 - 2002
// iyr 2010 - 2020
// eyr 2020 - 2030
// hgt 150 - 193, 59 - 76
// hcl 0-9 a-f
// ecl amb, blu, brn, gry, grn, hzl, oth
// pid 123456789
// cid ignored

//part 2 = 145