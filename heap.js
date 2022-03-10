const heap = [2, 5, 7, 3, 9, 10]

function heapify(toInsert) {
    heap.push(toInsert)
    let index = heap.length-1

    while(index > 0) {
        let element = heap[index]
        let parentIdx = Math.floor((index-1)/2)
        let parent = heap[parentIdx]

        if(parent >=  element) return

        heap[index] = parent
        heap[parentIdx] = element
        index = parentIdx

    }
}

heapify(20)