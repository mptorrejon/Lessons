const arr1 = [2, 6, 1, 3, 6, 9];
const arr2 = [1, 7, 3, 9, 3, 2];
const SUM = 7

function findPairSum(arr) {
    const lookup = new Set();
    let totalPairs = 0;
    for(var i=0; i<arr.length; i++){
        if(lookup.has(arr[i])) {
            console.log("found pair");
            totalPairs ++;
        } else {
            lookup.add( SUM - arr[i] )
            console.log(lookup)
        }
    }
    console.log(totalPairs)
}

findPairSum(arr2)