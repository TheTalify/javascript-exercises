const sumAll = function(minRange, maxRange) {
    if (!Number.isInteger(minRange) || !Number.isInteger(maxRange)) return "ERROR"
    if (maxRange < 0 || minRange < 0) return "ERROR"

    if (minRange > maxRange){
        let temp = maxRange;
        maxRange = minRange;
        minRange = temp;
    }

    let sum = 0;
    for (let i = minRange; i <= maxRange; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
