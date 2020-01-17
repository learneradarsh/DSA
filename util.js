class Util{

    //static method to find two input given strings are anagram or not
    static isAnagram(stringOne,stringTwo) {
        
        //If both strings length is not same then they can't be anagram 
        if(stringOne.length != stringTwo.length){
            return false;
        }
       
        //If both sorted strings are not equal then they can't be anagram 
        if(stringOne.split('').sort().join('') != stringTwo.split('').sort().join('')){
            return false;
        }

        return true;
    }
}


  