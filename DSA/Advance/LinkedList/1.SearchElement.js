// Search for an element in the given linked list 

const searchElement = (head, k) => {
    let temp = head;
    while (temp != null) {
        if (temp.data == k) return true;
        temp = temp.next;
    }
    return false;
}

console.log(searchElement(head, k));