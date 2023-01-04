
let l1 = [2,4,3];
let l2 = [5,6,4];

var addTwoNumbers = function(l1, l2) {
    let solution = [];
    for (i=0; i<l1.length; i++) {
        if (l1[i] + l2[i] < 10) {
            solution.push(l1[i] + l2[i])
        } else {
            solution[i-1] = solution[i] + 1;
            solution.push(l1[i] + l2[i] - 10);
        }
    }
    return solution;
};

let test1 = [2];
console.log(test1[0]);

test1[0] = test1[0] + 1;


// console.log(addTwoNumbers(l1,l2));