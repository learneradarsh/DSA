"use strict";
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const readFile = fileName => {
  let data = fs.readFileSync(
    __dirname + "/records/" + fileName + ".json",
    "utf8"
  );
  return JSON.parse(data);
};

const writeFile = (outputStr, fileName) => {
  fs.writeFile(
    __dirname + "/records/" + fileName + ".json",
    JSON.stringify(outputStr),
    function(err) {
      if (err) {
        throw err;
      }
    }
  );
};

module.exports = {
  rl,
  readFile,
  writeFile
};
