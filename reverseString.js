
var string = ("banana");
function ReverseString(str){
    var reversedStr = "";
    var modifiedStr = "";

    for (var i = str.length-1; i>=0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(ReverseString(string));

var numbers = [1, 2, 3, 4, 5];
var result = 0;
for (var i = 0; i < numbers.length; i++) {
  result += numbers[i] * 2;
  console.log(result);
}

let numbers = [1,4,2,5,9,7];
function SecondNumber(arr) {
    arr.sort(function(a,b) {
        a -b;
    });
    // get the second lowest value
    const secondLowest = arr[1];

    // get the second highest value
    const secondHighest = arr[arr.length - 2];

    // return an object with the results
    return { secondLowest, secondHighest };
}
console.log(SecondNumber(numbers));