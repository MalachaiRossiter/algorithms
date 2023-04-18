/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    for (i = 0; i <= candies.length-1; i++){
        candies[i] += extraCandies >= Math.max(...candies)? result.push(true) : result.push(false)
    }
    return result
};