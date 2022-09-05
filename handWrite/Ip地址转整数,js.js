function ipToNum(ip) {
    var temp = ip.split('.');
    var num = '';
    for (item of temp) {
        var number = Number(item).toString(2)
        while (number.length < 8)
            number = '0'.concat(number);
        num = num.concat(number);
    }
    return parseInt(num, 2);
}
console.log(ipToNum('10.0.3.193'));