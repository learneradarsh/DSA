const util = require("./util"); //imported util.js
let inputArr = []; //to take input from user
let ElapseTimeArr = []; //to store elapse time for all methods
let startElapseTime = 0, endElapseTime = 0; //to store start and end elapse time for each method

/**
 * to show main menu to user
 */
function main() {
    console.log("Select option");
    console.log(`
    1. binarySearch method for integer
    2. binarySearch method for String
    3. insertionSort method for integer
    4. insertionSort method for String
    5. bubbleSort method for integer
    6. bubbleSort method for String
    7. exit
`);
}
    let option = 0;
    let suboption = 0;
    let standard_input = process.stdin;
    standard_input.on("data", function (data) {
        if (data.toString().trim() === "exit") {
            process.exit();
        } else {
            //binarySearch method for integer
            if (option == 1) { 
                startElapseTime = new Date().getTime();
                inputArr = data.toString().trim().split(' ');
                console.log(inputArr);
                option = 0;
                suboption = 1;
                console.log("Enter number which you want to search:");
                return

            } else if (suboption == 1) {
                if (util.Util.binarySearchForInt(data.toString().trim(), inputArr) == 1) {
                    console.log("Number is there");
                } else if (util.Util.binarySearchForInt(data.toString().trim(), inputArr) == 2) {
                    console.log("Invalid input");
                } else {
                    console.log("Number not found");
                }
                inputArr = [];
                suboption = 0;
                endElapseTime = new Date().getTime();
                ElapseTimeArr.push(endElapseTime - startElapseTime); //pushing difference to ElapseTimeArr
                console.log("Elapse Time:", endElapseTime - startElapseTime); //showing elapse time for this specific method
                startElapseTime = 0;
                endElapseTime = 0;
                main();
            } 
            //binarySearch method for String
            else if (option == 2) { 
                startElapseTime = new Date().getTime();
                inputArr = [];
                inputArr = data.toString().trim().split(' ');
                option = 0;
                suboption = 2;
                console.log("Enter string which you want to search:");
                return
            } else if (suboption == 2) {
                if (util.Util.binarySearchForString(data.toString().trim(), inputArr)) {
                    console.log("Key Found");
                } else if (util.Util.binarySearchForString(data.toString().trim(), inputArr) == 2) {
                    console.log("Not a valid input");
                }
                else {
                    console.log("Key not found");
                }
                inputArr = [];
                suboption = 0;
                endElapseTime = new Date().getTime();
                ElapseTimeArr.push(endElapseTime - startElapseTime);
                console.log("Elapse Time:", endElapseTime - startElapseTime);
                startElapseTime = 0;
                endElapseTime = 0;
                main();
            } 
            //insertionSort method for integer
            else if (option == 3) {
                startElapseTime = new Date().getTime();
                inputArr = data.toString().trim().split(' ');
                if (util.Util.insertionSortForInt(inputArr) != 0) {
                    console.log("Integer Sorted Array", util.Util.insertionSortForInt(inputArr));
                } else {
                    console.log("Not a valid input");
                }
                inputArr = [];
                option = 0;
                endElapseTime = new Date().getTime();
                ElapseTimeArr.push(endElapseTime - startElapseTime);
                console.log("Elapse Time:", endElapseTime - startElapseTime);
                startElapseTime = 0;
                endElapseTime = 0;
                main();
            }
            // insertionSort method for String
            else if (option == 4) {
                startElapseTime = new Date().getTime();
                inputArr = data.toString().trim().split(' ');
                if (util.Util.insertionSortForString(inputArr) != 0) {
                    console.log("String Sorted Array", util.Util.insertionSortForString(inputArr));
                } else {
                    console.log("Not a valid input");
                }
                inputArr = [];
                option = 0;
                endElapseTime = new Date().getTime();
                ElapseTimeArr.push(endElapseTime - startElapseTime);
                console.log("Elapse Time:", endElapseTime - startElapseTime);
                startElapseTime = 0;
                endElapseTime = 0;
                main();
            }
            // bubbleSort method for integer
            else if (option == 5) {
                startElapseTime = new Date().getTime();
                inputArr = data.toString().trim().split(' ');
                if (util.Util.bubbleSortForInt(inputArr) != 0) {
                    console.log("Integer Sorted Array", util.Util.bubbleSortForInt(inputArr));
                } else {
                    console.log("Not a valid input");
                }
                inputArr = [];
                option = 0;
                endElapseTime = new Date().getTime();
                ElapseTimeArr.push(endElapseTime - startElapseTime);
                console.log("Elapse Time:", endElapseTime - startElapseTime);
                startElapseTime = 0;
                endElapseTime = 0;
                main();
            }
            // bubbleSort method for String
            else if (option == 6) {
                startElapseTime = new Date().getTime();
                inputArr = data.toString().trim().split(' ');
                if (util.Util.bubbleSortForString(inputArr) != 0) {
                    console.log("String Sorted Array", util.Util.bubbleSortForString(inputArr));
                } else {
                    console.log("Not a valid input");
                }
                inputArr = [];
                option = 0;
                endElapseTime = new Date().getTime();
                ElapseTimeArr.push(endElapseTime - startElapseTime);
                console.log("Elapse Time:", endElapseTime - startElapseTime);
                startElapseTime = 0;
                endElapseTime = 0;
                main();
            }
            //to take option input from user 
            else {
                switch (data.toString().trim()) {
                    case "1":
                        console.clear();
                        console.log("Enter integer array elements separated by space");
                        option = 1;
                        return;
                    case "2":
                        console.clear();
                        console.log("Enter string array elements separated by space");
                        option = 2;
                        return;
                    case "3":
                        console.clear();
                        console.log("Enter integer array elements separated by space");
                        option = 3;
                        return;
                    case "4":
                        console.clear();
                        console.log("Enter string array elements separated by space");
                        option = 4;
                        return;
                    case "5":
                        console.clear();
                        console.log("Enter integer array elements separated by space");
                        option = 5;
                        return;
                    case "6":
                        console.clear();
                        console.log("Enter string array elements separated by space");
                        option = 6;
                        return;
                    default:
                        //showing elapse time for all methods in descending order
                        console.log("Total Elapse Time:",ElapseTimeArr.sort(function (a,b) {
                            return b-a;
                        }));
                        process.exit();
                }
            }
        }
    });

main();
