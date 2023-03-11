/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //checks to see if the number is negative so that it can either save the negative in front
    const isNegative = x < 0;
    const xStrArr = Math.abs(x).toString().split("");
    const reversStr = xStrArr.reverse().join("");
    const num = Number(reversStr);
    if (isNegative && num > Math.pow(2, 31)) {
        return 0;
    }
    if (!isNegative && num > Math.pow(2, 31) - 1) {
        return 0;
    }
    return isNegative ? -num : num;
};