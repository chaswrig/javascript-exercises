const fibonacci = function(number) {
    if(number < 0) {
        return "OOPS";
    } else if(number == 0) {
        return 0;
    } else {
        //I've read SICP
        let a = (1+Math.sqrt(5))/2;
        let b = (1-Math.sqrt(5))/2;
        fib = (Math.pow(a,number) - Math.pow(b,number)) / Math.sqrt(5);
        return Math.floor(fib);
    }
};

// Do not edit below this line
module.exports = fibonacci;
