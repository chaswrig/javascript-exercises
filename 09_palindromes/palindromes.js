const palindromes = function (string) {
    //Standardize the strings.
    let trimmedString = string.replace(/[^\p{L}\p{N}]/gu, ''); //remove whitespace and punctuation
    let allUpper = trimmedString.toUpperCase(); //same case
    
    //Convert to array, reverse, and 
    const stringArray = allUpper.split("");
    const reversedArray = stringArray.reverse();

    let reversedString = reversedArray.join("");

    if(allUpper === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
