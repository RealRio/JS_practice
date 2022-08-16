//柯里化是把接受多个参数的函数变成接受一部分参数，返回一个接受剩余参数并
//返回结果的新函数
// function currying(fn){
//     return function curried(...args){
//         if(args.length>=fn.length)
//             return fn(...args);
//         return function(...args2){
//             return curried.apply(this,args.concat(args2))
//         }
//     }
// }
// function solidAdd(a,b,c){
//     return a+b+c;
// };
// const f=currying(solidAdd);
// console.log(f(10,5)(2))

//实现add（10，5）（2）

function curryingAdd(...args) {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    let _args =[...args];
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    let _adder = function () {
      _args.push(...arguments);
      return _adder;
    };

    _adder.toString = function () {
      return _args.reduce((a, b) =>a+b );
    }
    return _adder;
  }
  console.log(curryingAdd(1, 2)(3, 4)(5));


