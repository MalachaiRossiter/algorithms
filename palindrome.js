var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    } else if (x === +x.toString().split("").reverse().join("")){
        return true;
    }
    return false;
};