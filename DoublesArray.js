var removeElement = function(nums, val) {
    for (i=0; i<nums.length; i++){
        if (val !== nums[i]){
            nums.splice(i,1);
        }
        console.log(nums);
    }
    k = nums.length;
    return [nums, k]
};

removeElement([3,2,2,3], 3);