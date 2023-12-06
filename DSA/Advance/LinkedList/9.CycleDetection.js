// Given a head node of LL, check for cycle detection

const isCycleDetected = (head) => {
    let sp = head;
    let fp = head;
    while (fp.next != null && fp.next.next != null) {
        sp = sp.next;
        fp = fp.next.next;
        if (sp == fp) return true;
    }
    return false;
}