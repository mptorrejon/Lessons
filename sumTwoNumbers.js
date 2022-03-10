function SumTwoNumers(nums, target) {
    var newArr = []

    for(var i=0; i<nums.length; i++) {
        let isPresent = target - nums[i]
        
        if (newArr.includes(nums[i]) ) {
            console.log(newArr.indexOf(nums[i]), i)
        } else {
            newArr.push(isPresent)
        }
    }
    console.log(newArr)
}

// SumTwoNumers([2, 1, 5, 7, 9], 9);


var productExceptSelf = function(nums) {
    let product = [];
    let rs = 1;
    
    for(var j=0; j<nums.length; j++){
        rs = 1
        for(var i=0; i<nums.length; i++) {
            if(i !== j) {
                rs = rs * nums[i]    
            }       
        }
        
        product.push(rs )
    }
    return product
};

console.log(productExceptSelf([1, 2, 3, 4]));