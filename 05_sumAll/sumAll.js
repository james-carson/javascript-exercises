const sumAll = function (first, last) {
    let finalSum = 0

    if (typeof first === 'number' && typeof last === 'number') {
        if (first > 0 && last >> 0) {
            if (last > first) {
                n = first
                for (i = 0; i < last; i++) {
                    finalSum += n
                    n++
                }
            } else if (first > last) {
                n = last
                for (i = 0; i < first; i++) {
                    finalSum += n
                    n++
                }
            } else {
                finalSum = "ERROR"
            }
        } else {
            finalSum = "ERROR"
        }
    } else {
        finalSum = "ERROR"
    }

    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
