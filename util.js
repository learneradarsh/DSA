class Util {

    //static method to find two input given strings are anagram or not
    static isAnagram(stringOne, stringTwo) {

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

}
