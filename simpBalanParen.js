let standard_input = process.stdin;
let inpArr = [];
let openBracketCount = 0;
let closeBracketCount = 0;
class Stack {
    constructor(inpArr) {
        this.items = inpArr;
    }

    //to insert element in stack
    push(element) {
        this.items.push(element);
    }

    //to delete element from stack
    pop() {
        if (this.items.length != 0) {
            return this.items.pop();
        }
        return -1;
    }

    //to return top most element of stack
    peak() {
        return this.items[this.items.length - 1];
    }

    //to check stack is empty or not
    isEmpty() {
        if (this.items.length != 0) {
            return false;
        }
        return true;
    }

    //to check size of stack
    size() {
        return this.items.length;
    }


}

console.log("Enter Arithmetic Expression:");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        inpArr = data.toString().trim().split('');
        const stack = new Stack(inpArr);
        if (stack.isEmpty()) {
            console.log("stack is empty");
        } else {
            while (stack.size()!=0) {
                let poppedElement = stack.pop();
                if (poppedElement == ')') {
                    ++closeBracketCount;
                } else if (poppedElement == '(') {
                    ++openBracketCount;
                }
            }
            console.log(openBracketCount, closeBracketCount);
            if (openBracketCount == closeBracketCount) {
                console.log("expression is Balanced");
            } else {
                console.log("expression is Non-Balanced");
            }
        }
        process.exit();
    }
});