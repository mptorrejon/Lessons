const arr = [1, 2, 3, 4, 5]
// min 16
// max 24

function findMinSum() {
    let min = 0;
    for(let i=0; i<arr.length-1; i++){
        min = min+arr[i]
    }
    console.log(min)
}
function findMaxSum() {
    let max = 0;
    for(let j=arr.length-1; j>0; j--){
        max = max+arr[j]
    }
    console.log(max)
}

findMinSum()
findMaxSum()