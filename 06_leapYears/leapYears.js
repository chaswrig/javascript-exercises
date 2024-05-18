const leapYears = function(year) {
    divisibleByFour = year % 4;
    divisibleByHundred = year % 100;
    divisiblebyFourHundred = year % 400
    if (divisibleByHundred == 0 && divisibleByFour == 0 && divisiblebyFourHundred == 0){
        return true;
    } else if(divisibleByHundred == 0 && divisiblebyFourHundred != 0){
        return false;
    } else if(divisibleByHundred != 0 && divisibleByFour == 0){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
