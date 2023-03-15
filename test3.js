// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// function solution(A, B, S) {
//     let res = false;
//     // write your code in JavaScript (JavaScript (Node.js 8.9.4))
//     if (A.length > S)
//         return res;
//     let freeTime = new Array(S + 1).fill(1);
//     function dfs(A, B, freeTime) {
//         console.log(res);
//         if (!A.length)
//             return res = true;
//         let temp = freeTime.slice();
//         if (temp[A[0]] === 0 && temp[B[0]] === 0)
//             return;
//         if (temp[A[0]] === 1) {
//             temp[A[0]] = 0;
//             let newA = A.slice(1);
//             let newB = B.slice(1);
//             dfs(newA, newB, temp);
//         }
//         if (temp[B[0]] === 1) {
//             temp[B[0]] = 0;
//             let newA = A.slice(1);
//             let newB = B.slice(1);
//             dfs(newA, newB, temp);
//         }
//     }
//     dfs(A, B, freeTime);
//     return res;
// }
var F = function () { };
Object.prototype.a = function () {
    console.log('a');
}
Function.prototype.b = function () {
    console.log('b');
}
var f = new F();
f.a();
f.b();
F.a();
F.b();
