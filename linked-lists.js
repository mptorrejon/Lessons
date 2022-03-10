class Node {
    constructor(d) {
        this.data = d
        this.next = null
    }
}

function LinkList(arr) {
    this.head = null;
    this.curr = null;
    // let curr = this.head
    for( let i=0; i< arr.length; i++) {
        if(this.head == null) {
            this.head = new Node(arr[i])
            this.curr = this.head
        } else {
            let node = new Node(arr[i])
            this.curr.next = node
            this.curr = this.curr.next
        }
    }
    return this.head;
}
function print(ll) {
    while(ll != null) {
        console.log(ll.data)
        ll = ll.next;
    }
}

// const root = LinkList([2, 5, 3, 1])
// console.log(JSON.stringify(root))
// print(root);
module.exports = {
    LinkList: LinkList, 
    print: print
}
