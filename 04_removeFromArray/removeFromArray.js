const removeFromArray = function(arr) {
    const args = Array.from(arguments);
    // start index at 1 because first item contains the arr
    for (let i = 1; i < args.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === args[i]) {
                arr.splice(j,1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
