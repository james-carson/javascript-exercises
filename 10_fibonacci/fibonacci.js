const fibonacci = function(input) {
    
    fibNum = parseInt(input)

    let n1 = 0,
        n2 = 1,
        newNum;

    if (fibNum < 0){
        newNum = "OOPS";
    } else if (fibNum === 0){
        newNum = 0
    } else if (fibNum === 1){
        newNum = 1
    } else {
        for (i = 2; i <= fibNum; i++) {
            newNum = n1 + n2;
            n1 = n2;
            n2 = newNum;
        };
    }
    return newNum;   
    }

// Do not edit below this line
module.exports = fibonacci;
