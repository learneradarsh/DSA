let standard_input = process.stdin;
let inpArr = [];
class MergeSort {

    //method to merge arrays
    static merge(left, right) {
        let resArr = [], leftIn = 0, rightIn = 0;

        while (leftIn < left.length && rightIn < right.length) {
            if (left[leftIn] < right[rightIn]) {
                resArr.push(left[leftIn]);
                leftIn++;
            } else {
                resArr.push(right[rightIn]);
                rightIn++;
            }
        }

        return resArr.concat(left.slice(leftIn)).concat(right.slice(rightIn));
    }

    //method to perform merge sort on inpArr
    static mergeSort(inpArr) {
        if (inpArr.length <= 1) {
            return inpArr;
        }
        const mid = Math.floor(inpArr.length / 2);
        const left = inpArr.slice(0, mid);
        const right = inpArr.slice(mid);

        return this.merge(this.mergeSort(left), this.mergeSort(right));
    }
}

console.log("Enter string which you want to sort without spaces:");
standard_input.on("data", function (data) {
    if (data.toString().trim() === "exit") {
        process.exit();
    } else {
        inpArr = data.toString().trim().split('');
        console.log(MergeSort.mergeSort(inpArr));
        process.exit();
    }
});