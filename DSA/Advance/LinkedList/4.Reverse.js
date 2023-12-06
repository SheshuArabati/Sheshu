// Reverse the given LL

const reverse = (head) => {
    if (head == null) return head;
    let curr = head;
    let prev = null;
    while (curr != null) {
        let forw = curr.next;
        curr.next = prev;
        prev = curr;
        curr = forw;
    }
    head = prev;
    return head;
}

console.log(reverse(head));