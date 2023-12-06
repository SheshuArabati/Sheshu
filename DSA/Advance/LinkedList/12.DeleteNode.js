// Delete a given node from DLL
// Note: Node reference/address is given
// Note: Given node is not head/tail node

const deleteNode = (head) => {
    let t1 = head.prev;
    let t2 = head.next;
    t1.next = t2;
    t2.prev = t1;
    head.prev = null;
    head.next = null;
}