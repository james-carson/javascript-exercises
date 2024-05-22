const repeatString = function(word, number) {
    let i = 0;
    finalString = "";

    if (number < 0) {
        finalString = "ERROR";
    }

    for (i = 0; i < number; i++) {
        finalString += word;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
