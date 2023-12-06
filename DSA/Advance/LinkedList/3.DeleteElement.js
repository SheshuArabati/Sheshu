// Delete first occurence of value X in the given LL

const deleteElement = (head, ele) => {
    let temp = head;
    if (temp.data == ele) {
        head = head.next;
        return head;
    }
    while (temp != null) {
        if (temp.next && temp.next.data == ele) {
            temp.next = temp.next.next;
            return head;
        }
        temp = temp.next;
    }
    return head;
}

console.log(deleteElement(head, 10));