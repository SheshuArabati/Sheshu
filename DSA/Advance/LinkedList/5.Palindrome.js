// Check if the given LL is palindrome or not

const checkPalindrome = (head) => {
    if (head == null) return head;
    let n = 0;
    let temp = head;
    while (temp != null) {
        temp = temp.next;
        n++;
    }
    if (n == 1) return true;
    temp = head;
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) {
        temp = temp.next;
    }
    let prev = null;
    while (temp != null) {
        let forw = temp.next;
        temp.next = prev;
        prev = temp;
        temp = forw;
    }
    temp = prev;
    for (let i = 0; i < mid; i++) {
        if (head.data != temp.data) return false;
        head = head.next;
        temp = temp.next;
    }
    return true;
}

console.log(checkPalindrome(head));