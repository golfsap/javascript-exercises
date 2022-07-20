const sumAll = function(num1, num2) {
    // both have to be numbers, cannot be negative
    if ((isNaN(num1)) || isNaN(num2)) {
        return 'ERROR';
    }
    else {
        let sum = 0;
        if (Math.max(num1, num2) === num2) {
            startInterval = num1;
            endInterval = num2;
        }
        else {
            startInterval = num2;
            endInterval = num1;
        }
        for (let i = startInterval; i <= endInterval; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
