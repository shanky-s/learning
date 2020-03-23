const fs = require("fs");
const path = "writing-files.txt";

fs.writeFileSync(path ,"This line is written by Nodejs!");

fs.appendFileSync(path,"\nThis line is appended to previous line");