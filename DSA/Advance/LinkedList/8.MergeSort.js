// Merge sort

const merge = (h1, h2) => {
    if (h1 == null) return h2;
    if (h2 == null) return h1;
    let head;
    if (h1.data <= h2.data) {
        head = h1;
        h1 = h1.next;
    } else {
        head = h2;
        h2 = h2.next;
    }
    let temp = head;
    while (h1 != null && h2 != null) {
        if (h1.data <= h2.data) {
            temp.next = h1;
            h1 = h1.next;
        } else {
            temp.next = h2;
            h2 = h2.next;
        }
        temp = temp.next;
    }
    if (h1 != null) {
        temp.next = h1;
    }
    if (h2 != null) {
        temp.next = h2;
    }
    return head;
}

const findMid = (head) => {
    if (head == null) return head;
    let sp = head;
    let fp = head;
    while (fp.next != null && fp.next.next != null) {
        sp = sp.next;
        fp = fp.next.next;
    }
    return sp;
}

const mergeSort = (head) => {
    if (head == null || head.next == null) return head;
    let mid = findMid(head);
    let h1 = mid.next;
    mid.next = null;
    let t1 = mergeSort(head);
    let t2 = mergeSort(h1);
    return merge(t1, t2);
}