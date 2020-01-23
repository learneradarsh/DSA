'use strict'
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const readFile = (fileName) => {
    let data = fs.readFileSync(__dirname + '/records/'+fileName+'.json',"utf8");
    return JSON.parse(data);
}   

const writeFile = (outputStr, fileName) => {
    fs.writeFile(__dirname + '/records/'+fileName+'.json', JSON.stringify(outputStr), function (err) {
        if (err) {
            throw err;
        }
    });
}

const showAllJSONFiles = () => {
    let files = fs.readdirSync('/home/learner/Documents/TW/DSA/AddressBook/records');
    let fileNameStr=[];
    for(let i in files){
        fileNameStr.push(files[i]);
    }
    fileNameStr = fileNameStr.map(item => {
        return item.replace('.json','');
    });
    return fileNameStr;
}

module.exports = {
    rl,
    readFile,
    writeFile,
    showAllJSONFiles
}
