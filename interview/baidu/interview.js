//8.24一面2
//css
//js 数组迭代方法
//手撕：去重 reduce/set
// consoel.log(add(5)(2)(4)(5)());
function add(arr) {
    return arr.reduce((pre, cur) => pre + cur);
}
function add(n) {
    let nAdd = function (args) {
        if (args) {
            return add(args + n);
        }
        else {
            return n;
        }
    }
    return nAdd;
}
console.log(add(5)(2)(4)(5)());
//const result = calc.add(10).multiply(5).substract(30).add(10);
//console.log(result.total);
// class Calc{
//     constructor(val){
//         this.total=val;
//     }
//     add(num){
//         this.total+=num;
//         return this;
//     }
//     multiply(num){
//         this.total*=num;
//         return this;
//     }
//     substract(num){
//         this.total/=num;
//         return this;
//     }
// }
// let calc=new Calc(0);
// const result = calc.add(10).multiply(5).substract(30).add(10);
//  console.log(result.total);
let calc = {
    total: 0,                   //tm的，创建对象属性是，
    add: function (num) {
        this.total += num;
        return calc;
    },
    multiply: function (num) {
        this.total *= num;
        return calc;
    },
    substract: function (num) {
        this.total /= num;
        return calc;
    }
}
const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);
//ermian
和为sum的三个数
最长回文子串
import的时候怎么得到正确的包
//浏览器 import esm
//sanmian