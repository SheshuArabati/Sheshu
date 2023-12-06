// Given a LL, create and return a clone of it. (Interview)

const cloneLL = (head) => {
    let temp = head;
    while (temp != null) {
        let nn = new Node(temp.data);
        nn.next = temp.next;
        temp.next = nn;
        temp = temp.next.next;
    }
    let t1 = head;
    let t2 = head.next;
    while (t1 != null) {
        t2.random = t1.random.next;
        t1 = t1.next.next;
        if (t2.next != null) t2 = t2.next.next;
    }
    t1 = head;
    t2 = head.next;
    let ans = t2;
    while (t1 != null) {
        t1.next = t1.next.next;
        if (t2.next != null) t2.next = t2.next.next;
        t1 = t1.next;
        t2 = t2.next;
    }
    return ans;
}