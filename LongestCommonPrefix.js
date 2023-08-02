/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) {
  return "";
}

// Find the shortest string in the list (minimum length prefix)
const minLenStr = strs.reduce((min, str) => (str.length < min.length ? str : min), strs[0]);

for (let i = 0; i < minLenStr.length; i++) {
  const char = minLenStr[i];
  for (const string of strs) {
    if (string[i] !== char) {
      return minLenStr.slice(0, i);
    }
  }
}

return minLenStr;
};