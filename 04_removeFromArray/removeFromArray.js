const removeFromArray = function(arrayInput, ...removeInput) {
   for (let i = 0; i < removeInput.length; i++)
    for (let j=0; j < arrayInput.length; j++)
        if (arrayInput[j] === removeInput[i]){
            arrayInput.splice([j], 1)
            j--
        }
    return arrayInput
};

// Do not edit below this line
module.exports = removeFromArray;
