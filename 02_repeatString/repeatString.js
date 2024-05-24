const repeatString = function(word, number) {
    
    if (number < 0) {
        return "ERROR";
    }
    finalString = "";
    for (i = 0; i < number; i++) {
        finalString += word;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
