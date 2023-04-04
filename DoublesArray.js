var removeElement = function(nums, val) {
    for (i=0; i<nums.length;){
        if (val !== nums[i]){
            nums.splice(i,1);
        }
        else {
            i++;
        }
    }
    console.log(nums)
    k = nums.length;
    console.log(k);
    return [nums, k]
};

console.log(removeElement([3,2,2,5], 5));