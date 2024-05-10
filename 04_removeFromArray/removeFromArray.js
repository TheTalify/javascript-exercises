const removeFromArray = function(array, ...toBeRemoved) {
    const newArray = [];
    array.forEach(element => {
        if (!toBeRemoved.includes(element))
            newArray.push(element);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
