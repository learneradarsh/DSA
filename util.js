class Util {

    //static method to find two input given strings are anagram or not
    static isAnagram(stringOne, stringTwo) {
        stringOne = stringOne.toString();
        stringTwo = stringTwo.toString();
        //If both strings length is not same then they can't be anagram 
        if (stringOne.length != stringTwo.length) {
            return false;
        }

        //If both sorted strings are not equal then they can't be anagram 
        if (stringOne.split('').sort().join('') != stringTwo.split('').sort().join('')) {
            return false;
        }

        return true;
    }

    //static method to find prime number between 0-1000
    static isPrime(number) {
        number = Number(number);
        if (!isNaN(number)) {
            if (number <= 1) {
                return false;
            }
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    return false;
                }
            }
            return true;
        } else {
            console.log("You have entered wrong input");
            return false;
        }

    }

    //static method to find input given numbers are prime or not
    static isPalindrome(numberOne, numberTwo) {
        numberOne = numberOne.toString();
        numberTwo = numberTwo.toString();
        if (numberOne.split('').reverse().join('') == numberTwo) {
            return true;
        }
        return false;
    }

    //static method to find prime numbers that are anagram and palindrome
    static isAnagramAndPalindrome(numberOne, numberTwo) {
        numberOne = Number(numberOne);
        numberTwo = Number(numberTwo);
        if (this.isPrime(numberOne) && this.isPrime(numberTwo)) {
            if (this.isAnagram(numberOne, numberTwo)) {
                if (this.isPalindrome(numberOne, numberTwo)) {
                    return true;
                }
            }
        }
        return false;
    }

    //static method to do binary search for integer
    static binarySearchForInt(inp, inpArray) {
        let i=0;
        let lenOne=inpArray.length;
        while(i<lenOne){
            if(isNaN(inpArray[i]) || isNaN(inp)){
                return 2;
            }else{
            inpArray[i]=parseInt(inpArray[i]);}
            i++;
        }
        inp = parseInt(inp);
        inpArray.sort(function (a, b) { return a - b; });
        let start = 0;
        let len = inpArray.length - 1;
        while (start <= len) {
            let mid = Math.floor((start + len) / 2);
            if (inpArray[mid] === inp) {
                return true;
            } else if (inpArray[mid] < inp) {
                start = mid + 1;
            } else {
                len = mid - 1;
            }
        }
        return false;
    }

    //static method to do binary search for string
    static binarySearchForString(inpStr, strArray) {
        let i=0;
        while(i<strArray.length){
            if(!isNaN(strArray[i]) || !isNaN(inpStr)){
                return 2;
            }
            i++;
        }
        inpStr = inpStr.toString();
        strArray.sort();
        let start = 0;
        let len = strArray.length - 1;
        while (start <= len) {
            let mid = Math.floor((start + len) / 2);
            if (strArray[mid] === inpStr) {
                return true;
            } else if (strArray[mid] < inpStr) {
                start = mid + 1;
            } else {
                len = mid - 1;
            }
        }
        return false;
    }

    //static method to do insertion sort for integer
    static insertionSortForInt(inpArray) {
        let i, key, j, size;
        i = 0;
        size = inpArray.length;
        while (i < size) {

            //If inpArray includes elements which is not a number
            if (isNaN(inpArray[i])) {
                return 0;
            }
            inpArray[i] = parseInt(inpArray[i]);
            key = inpArray[i];
            j = i - 1;
            i++;
            while (j >= 0 && inpArray[j] > key) {
                inpArray[j + 1] = inpArray[j];
                j = j - 1;
            }
            inpArray[j + 1] = key;
        }
        return inpArray;
    }

    //static method to do insertion sort for string
    static insertionSortForString(inpArray) {
        let i, key, j, size;
        i = 1;
        size = inpArray.length;
        while (i < size) {

            //If inpArray includes elements which is a number
            if (!isNaN(inpArray[i])) {
                return 0;
            }
            inpArray[i] = inpArray[i].toString();
            key = inpArray[i];
            j = i - 1;
            i++;
            while (j >= 0 && inpArray[j] > key) {
                inpArray[j + 1] = inpArray[j];
                j = j - 1;
            }
            inpArray[j + 1] = key;
        }
        return inpArray;
    }

    //static method to do bubble sort for integer
    static bubbleSortForInt(inpArray) {
        let len, i, j, stop, temp;
        len = inpArray.length;
        i = 0;
        for (i = 0; i < len; i++) {

            //If inpArray is containing any NaN element
            if (isNaN(inpArray[i])) {
                return 0;
            }
            for (j = 0, stop = len - i; j < stop; j++) {
                if (inpArray[j] > inpArray[j + 1]) {
                    temp = inpArray[j];
                    inpArray[j] = inpArray[j + 1];
                    inpArray[j + 1] = temp;
                }
            }
        }

        return inpArray;
    }

    //static method to do bubble sort for string
    static bubbleSortForString(inpArray) {
        let len, i, j, stop, temp;
        len = inpArray.length;
        i = 0;
        for (i = 0; i < len; i++) {

            //If inpArray is containing any not NaN element
            if (!isNaN(inpArray[i])) {
                return 0;
            }
            for (j = 0, stop = len - i; j < stop; j++) {
                if (inpArray[j] > inpArray[j + 1]) {
                    temp = inpArray[j];
                    inpArray[j] = inpArray[j + 1];
                    inpArray[j + 1] = temp;
                }
            }
        }

        return inpArray;
    }
}

module.exports.Util = Util;