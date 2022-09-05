let a=(Math.random()*0xFFFFFF)>>0;
console.log(a.toString(16))
let s='#ea17e1';
let arr=s.match(/\w{2}/g);
console.log(arr);
arr.forEach((item,idx)=>arr[idx]=parseInt(arr[idx],16));
console.log(arr);
let rgb='('+arr.join(',')+')';
console.log(rgb)