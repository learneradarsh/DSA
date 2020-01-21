let standard_input = process.stdin;

let inputArr = [];
class BSTCount {
    constructor() {
        this.n = 0;
    }
    fact(n) {
        let f = 1;
        for (let i = 1; i <= n; i++) {
            f = f * i;
        }
        return f;
    }
    countBST(n) {

        //finding Cn using Catalan number formula
        let Cn = this.fact(2 * n) / (this.fact(n + 1) * this.fact(n));
        return parseInt(Cn);
    }
}
console.log("Enter no. of nodes separated by space:");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        const bst = new BSTCount();
        inputArr = data.toString().trim().split(' ');
        for (let i = 0; i < inputArr.length; i++) {
            if(isNaN(inputArr[i])){
                console.log(`${inputArr[i]} is invalid element, it should be number`);
                process.exit();
            }
            console.log(`No. of BSTs can form for ${inputArr[i]} Node =`, bst.countBST(parseInt(inputArr[i])));
        }
        process.exit();
    }
});