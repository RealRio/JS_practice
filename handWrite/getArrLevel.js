Array.prototype.getLevel = function () {
    let flag = false;
    let arr = [];
    this.forEach((item) => {
        if (Array.isArray(item)) {
            flag = true;
            arr.push(item);
        }
    })
    if (!flag)
        return 1;
    let res = arr.map((item) => item.getLevel())
    return 1 + Math.max(...res);
}
console.log([1, [[[2]]]].getLevel());
