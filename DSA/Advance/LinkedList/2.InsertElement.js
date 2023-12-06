// Insert a value X at Kth position (0-based) in the given linked list (0 <= K <= N)

const insertElement = (head, ele, posi) => {
    let nn = new Node(ele);
    let temp = head;
    let i = 0;
    while (i < posi - 1) {
        temp = temp.next;
        i++;
    }
    nn.next = temp.next;
    temp.next = nn;
    return head;
}

console.log(insertElement(head, 10, 3));