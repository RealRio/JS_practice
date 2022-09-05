
function node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function arrToTree(arr, idx) {
    if (idx > arr.length)
        return;
    let tree = new node(arr[idx]);
    tree.left = arrToTree(arr, 2 * idx + 1);
    tree.right = arrToTree(arr, 2 * idx + 2);
    return tree;
}
const arr = [3, 7, 9, null, 8, 5, 5];
const tree = arrToTree(arr, 0);
