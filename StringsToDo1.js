var FunnyStrings = " Pl ayTha tF u nkyM usi c666";
var FunnyStrings2 = "I can not BELIEVE it's not BUTTER";
var arr = ['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'];

function removeBlanks(funString) {
    let newString = '';
    for (i = 0; i < funString.length; i++) {
        if (funString[i] != " "){
            newString += funString[i];
        }
    }
    return(newString)
}

// console.log(removeBlanks(FunnyStrings));

function countNotSpace(funString) {
    let newString = 0;
    for (i = 0; i < funString.length; i++) {
        if (funString[i] != " "){
            newString += 1;
        }
    }
    return newString;
}

// console.log(countNotSpace(FunnyStrings));

function isNumber(funString) {
    let newString = "";
    for (i = 0; i < funString.length; i++){
        if (isNaN(funString[i])){
        } else {newString += funString[i];}
    }
    return newString;
}

// console.log(isNumber(FunnyStrings));

function acronym(funString) {
    funString = funString.split('');
    let newString = funString[0];
    for (i = 0; i < funString.length; i++){
        if (funString[i] == ' '){
            newString += funString[i + 1];
        }
    }
    return newString.toUpperCase();
}

// console.log(acronym(FunnyStrings2));

function shortStrings(funString, n) {
    let array = [];
    for (i = 0; i < funString.length; i++) {
        if (n <= funString[i].length) {
            array.push(funString[i]);
        }
    }
    return array;
}

console.log(shortStrings(arr, 4));