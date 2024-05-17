const reverseString = function(input) {
    let length = input.length -1;
    let output = '';
    for(i = length; i >= 0; i--){
        output = output + input[i];
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
