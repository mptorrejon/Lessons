var findMedianSortedArrays = function(nums1, nums2) {
    const newarr = nums1.concat(nums2).sort()
    let rs = 0;
    if(newarr.length % 2) {
        return newarr[parseInt(newarr.length/2)]
    }

    for(let i=0, j=newarr.length-1; i<j; i++, j--) {
        if(i+1 == j) {
            rs = (newarr[i] + newarr[j])/2
        }
    }
    return rs
};

const arr1 = [1, 3];
const arr2 = [2,4]
const rs = findMedianSortedArrays(arr1, arr2)
console.log(rs)