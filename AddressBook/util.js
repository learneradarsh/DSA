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
  console.log("readfile:", data);
  return JSON.parse(data);
};

const writeFile = (outputStr, fileName) => {
  let allAvailableFiles = showAllJSONFiles();
  let isFilePresent = false;
  for (let file in allAvailableFiles) {
    if (file in allAvailableFiles) {
      if (fileName == allAvailableFiles[file]) {
        console.log("file exist");
        isFilePresent = true;
        return true;
      }
    }
  }
  if (isFilePresent == false) {
    fs.writeFile(
      __dirname + "/records/" + fileName + ".json",
      JSON.stringify(outputStr),
      function(err) {
        if (err) {
          throw err;
        }
      }
    );
  }
};

const showAllJSONFiles = () => {
  let files = fs.readdirSync(__dirname + "/records");
  let fileNameStr = [];
  for (let i in files) {
    fileNameStr.push(files[i]);
  }
  fileNameStr = fileNameStr.map(item => {
    return item.replace(".json", "");
  });
  return fileNameStr;
};

module.exports = {
  rl,
  readFile,
  writeFile,
  showAllJSONFiles
};
