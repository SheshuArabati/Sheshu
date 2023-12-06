// Delete the first occurance of data x in given DLL.

const deleteFirstOccurence = (head, k) => {
    let temp = head;
    while (temp != null) {
        if (temp.data == k) break;
        temp = temp.next;
    }
    if (temp == null) {
        return head;
    } else if (temp.prev == null && temp.next == null) {
        return null;
    } else if (temp.prev == null) {
        head = temp.next;
        temp.next = null;
        head.prev = null;
    } else if (temp.next == null) {
        temp.prev.next = null;
        temp.prev = null;
    } else {
        let t1 = temp.prev;
        let t2 = temp.next;
        t1.next = t2;
        t2.prev = t1;
        temp.prev = null;
        temp.next = null;
    }
    return head;
}