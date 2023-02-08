
let array1 = [1,3,5,7,4,5,6,7,3,2,1]
let value = 89

function pushFront(arr, val) {
    let temp = [];
    for(i=0; i < arr.length; i++){
        temp[i] = arr[i];
    }
    arr[0] = val;
    for(i=0; i < temp.length; i++){
        arr[i+1] = temp[i];
    }
    return arr;
}

// console.log(pushFront(array1, value));

function popFront(arr) {
    let temp = arr[0];

    for (let i=0; i < arr.length; i++){
        arr[i] = arr[i + 1];

        arr.length = arr.length -1;
        console.log(arr);
        return temp;
    }
}

// console.log(pushFront(array1));

function insertAt(arr, index, val) {
    for (i = arr.length; i >= index; i--) {
        arr[i] = arr[i -1]
    }
    arr[index] = val;

    return arr
}

console.log(insertAt(array1, 4, value));