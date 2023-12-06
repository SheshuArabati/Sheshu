// Given head node, find middle of linked list

const findMid = (head) => {
    if (head == null) return null;
    let sp = head;
    let fp = head;
    while (fp.next != null && fp.next.next != null) {
        sp = sp.next;
        fp = fp.next.next;
    }
    return sp;
}

console.log(findMid(head));