const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
  return firstNum - secondNum;
};

const sum = function(array) {
	const summedArray = array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);

  return summedArray;
};

const multiply = function(array) {
  const productArray = array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);

  return productArray;
};

const power = function(firstNum, secondNum) {
	return firstNum**secondNum;
};

const factorial = function(number) {
	if(number === 0) {
    return 1;
  } else {
    const array = [];
    let changingNumber = number;
    for(i = 1; i <= number; i++) {
      array[i] = changingNumber;
      changingNumber = changingNumber - 1;
    }
    const productArray = array.reduce((total, currentItem) => {
      return total * currentItem;
    }, 1);

    return productArray;
  }  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
