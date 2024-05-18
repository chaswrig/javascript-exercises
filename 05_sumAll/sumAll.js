const sumAll = function(firstNumber, secondNumber) {
    let firstNumberType = typeof firstNumber;
    let secondNumberType = typeof secondNumber;
    if (firstNumberType !== "number" || secondNumberType !== "number"){
        return "ERROR";
    } else if (firstNumber < 0 || secondNumber < 0){
        return "ERROR";
    } else {
        let sumAll = 0;
        if (firstNumber < secondNumber) {
            for(i = firstNumber; i <= secondNumber; i++) {
                sumAll = sumAll + i;
            }
        } else {
            for(i = secondNumber; i <= firstNumber; i++){
                sumAll = sumAll + i;
            }
        }

        return sumAll;
    }
};

// Do not edit below this line
module.exports = sumAll;
