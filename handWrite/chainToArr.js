// function process(input) {
//     const res = {};
//     const keys = Object.keys(input);
//     for (let key of keys) {
//         const arr = key.split('.');
//         let temp=res;
//         for (let i = 0; i < arr.length; i++) {
//             const k = arr[i];
//             temp[k] = temp[k] ?? (i === arr.length - 1 ? input[key] : {});
//             temp=temp[k];
//         }
//     }
//     return res;
// }
// const input = {
//     'a.b.c': 1,
//     'a.b.d': 2,
//     'a.e': 3,
//     'f': 4,
// };
// const output = {
//     a: {
//         b: {
//             c: 1,
//             d: 2
//         },
//         e: 3
//     },
//     f: 4
// };
// console.log(JSON.stringify(process(input)));
// let x=1;
// const map={x}
var name='W';
(function (){
    if(typeof name ==='undefined'){
        console.log('jo'+name)
    }
    else{
        console.log('je;;'+name);
    }
})()