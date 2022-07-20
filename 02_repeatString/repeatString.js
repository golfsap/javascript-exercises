const repeatString = function(string, num) {
    if (num <0) {
        return "ERROR";
    }
    let repeatedString = '';
    //return newString = string.repeat(num);
    for (let i = 0; i < num; i++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
