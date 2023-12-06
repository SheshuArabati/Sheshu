// Insert a new node just before tail of DLL
// Note: Tail reference is given in input
// Note: No. of nodes >= 2

const insertNode = (nn, tail) => {
    nn.prev = tail.prev;
    nn.next = tail;
    tail.prev.next = nn;
    tail.prev = nn;
}