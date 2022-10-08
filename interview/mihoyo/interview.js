function derepeat1(arr) {
    return [...new Set(arr)]
}
console.log(derepeat1([1, 1, 2, 2, 3]));
function derepeat2(arr) {
    let map = new Map();
    arr.forEach((item) => {
        if (!map.has(item))
            map.set(item, 1);
    })
    let res = [];
    for (let [key, value] of map) {
        res.push(key)
    }
    return res;
}
console.log(derepeat2([1, 1, 2, 2, 3]));
