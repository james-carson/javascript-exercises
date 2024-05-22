const reverseString = function(input) {
    splitInput = input.split("");
    reversedArray = splitInput.reverse();
    reversedString = reversedArray.join("")
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
