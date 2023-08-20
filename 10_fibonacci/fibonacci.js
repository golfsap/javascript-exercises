const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    let prevNum = 0;
    let nextNum = 1;
    for (let i = 0; i < num - 1; i++) {
        let temp = nextNum;
        nextNum = nextNum + prevNum;
        prevNum = temp;
    }
    return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;
