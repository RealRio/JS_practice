// input [[2,8],[5,9],[10,18],[11,13],[3,6]]
// output [[2,9],[10,18]]
//合并区间
function merge(arr) {
    arr.sort((a, b) =>
        a[0] - b[0]
    );
    let res = arr.reduce((pre, cur) => {
        console.log(pre, cur);
        if (!pre.length) {
            pre.push(cur);
            return pre;
        }
        for (let i = 0; i < pre.length; i++) {
            if (pre[i][1] >= cur[0]) {
                pre[i][1] = Math.max(pre[i][1], cur[1]);
            }
            else if (i == pre.length - 1) {
                pre.push(cur);
            }
        }
        return pre;
    }, [])
    return res;
}
console.log(merge([[2, 8], [5, 9], [10, 18], [11, 13], [3, 6]]))