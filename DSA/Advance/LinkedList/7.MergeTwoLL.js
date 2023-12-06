// Given 2 sorted Linked List's, merge and get final sorted list

const merge = (A, B) => {
    if (A == null) return B;
    if (B == null) return A;
    let head;
    let ptr1 = A;
    let ptr2 = B;
    if (ptr1.data < ptr2.data) {
        head = ptr1;
        ptr1 = ptr1.next;
    } else {
        head = ptr2;
        ptr2 = ptr2.next;
    }
    let ans = head;
    while (ptr1 != null && ptr2 != null) {
        if (ptr1.data <= ptr2.data) {
            head.next = ptr1;
            ptr1 = ptr1.next;
        } else {
            head.next = ptr2;
            ptr2 = ptr2.next;
        }
        head = head.next;
    }
    if (ptr1 != null) {
        head.next = ptr1;
    } 
    if (ptr2 != null) {
        head.next = ptr2;
    }
    return ans;
}

console.log(merge(head));