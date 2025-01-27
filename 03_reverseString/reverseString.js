const reverseString = function(inputString) {
    let outputString = '';
    for (let length = inputString.length - 1; length >= 0; length--){
        outputString += inputString.charAt(length);
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
