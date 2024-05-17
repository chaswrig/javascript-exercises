const repeatString = function(input, number) {
    if(number < 0) {
        return 'ERROR';
    } else {
        let output = '';
        for(i = 1; i <= number; i++) {
            output = output + input;
        }
        
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;
