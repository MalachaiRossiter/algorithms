
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
    console.log(arr);
}

pushFront(array1, value);