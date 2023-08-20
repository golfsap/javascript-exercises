const palindromes = function (text) {
    let stripped = removePunctuation(text).toLowerCase();
    let reversed = reverseString(stripped);
    return stripped === reversed ? true : false;
};

function removePunctuation(text) {
    return newText = text.replace(/\W|_/g,'');
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Do not edit below this line
module.exports = palindromes;
