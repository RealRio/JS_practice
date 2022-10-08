function listNode(val) {
    this.val = val;
    this.next = null;
}
function arrToList(arr) {
    const head = new listNode(arr[0]);
    let p = head;
    for (let i = 1; i < arr.length; i++) {
        p.next = new listNode(arr[i]);
        p = p.next;
    }
    return head;
}
function reverseList(head) {
    if (!head || !head.next)
        return head;
    let newH = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newH;
}
console.log(JSON.stringify(reverseList(arrToList([1, 2, 3, 4]))));