const reverseString = function(string) {
    const splitStringArr = string.split('');
    let reversedString = '';
    for (let i = 0; i < splitStringArr.length; i++) {
        reversedString += splitStringArr[splitStringArr.length - 1 - i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
