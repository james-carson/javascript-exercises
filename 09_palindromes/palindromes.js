const palindromes = function (input) {
    
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    
    let forward = input.toLowerCase();

    forwardFormatted = forward.replace(/[^a-zA-Z0-9]/g, '');

    let backwards = reverseString(forwardFormatted);
    
    if (forwardFormatted === backwards) {
        return true
    } else {
        return false
    };

};

// Do not edit below this line
module.exports = palindromes;
