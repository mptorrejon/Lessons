class Node {
    constructor(d) {
        this.left = null;
        this.right = null;
        this.d = d;
    }
}
root = null;

function insertInBST(head, node) {
    if(node.d < head.d) {
        if(head.left == null) {
            head.left = node
        }
        insertInBST(head.left, node)
    }
    if(node.d > head.d ) {
        if(head.right == null) {
            head.right = node
        }
        insertInBST(head.right, node)
    }
}

function main(item) {
    this.node = new Node(item);
    if(root == null) {
        root = this.node;
    } 
        insertInBST(root, this.node);
    
}
const arr = [20, 9, 25, 5, 12, 11, 14];
for(var i=0; i< arr.length; i++) {
    main(arr[i]);
}
// console.log(JSON.stringify(root))

function PreOrderTraverse(node) {
    
    if(node.left !== null){
        PreOrderTraverse(node.left)
    }
    
    console.log(node.d)

    if(node.right !== null) {
        PreOrderTraverse(node.right)
    }
    
}
PreOrderTraverse(root);