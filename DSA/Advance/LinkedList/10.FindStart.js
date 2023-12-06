// Find the start of the cycle

const findStart = (head) => {
    let sp = head;
    let fp = head;
    while (fp.next != null && fp.next.next != null) {
        sp = sp.next;
        fp = fp.next.next;
        if (sp == fp) break;
    }
    sp = head;
    while (sp != fp) {
        sp = sp.next;
        fp = fp.next;
    }
    return sp;
}