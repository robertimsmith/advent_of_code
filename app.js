var fs = require("fs");
const { connect } = require("http2");
var text = fs.readFileSync("./input_2020_Q14.txt", "utf8");
let output = text.split("\n");
var size = output.length;