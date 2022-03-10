const LL = require('./link-lists');

const arr1 = [2, 4, 3, 6, 5]
const arr2 = [5, 6, 4, 4, 1]

const ll1 = LL.LinkList(arr1)
const ll2 = LL.LinkList(arr2)

let curr1 = ll1
let curr2 = ll2
let newarr = []

let count = 0;
while(curr1 && curr2) {
    let sum;
    sum = (curr1.data + curr2.data) + count
    count = 0
    if((curr1.data + curr2.data)>9) {
        count ++;
        sum = 0
    }
    newarr.push(sum);
    curr1 = curr1.next
    curr2 = curr2.next
}
const newLL = LL.LinkList(newarr)
LL.print(newLL)