//一面 分红包
//二面 看输出：a的闭包

// import react from 'react';
// import {h1} from 'react-dom'
// import { useState } from 'react/cjs/react.production.min';
// const {useEffect,useRef}=react;

let a=0,b=0;
function fn(a){
    fn=function(b){
        console.log(++a+b);
    }
    console.log(a++);
}
fn(1);
fn(2);
// //ts的高级类型：pick，omit
// //一些自定义hooks   hooks模拟生命周期  useState和UseRef
// const useMount=(fn)=>{
//     useEffect(()=>{
//         fn();
//     },[])
// }
// const useUnmount=(fn)=>{
//     const refFn=useRef(fn);
//     useEffect(()=>{
//         return ()=>{
//             refFn.current()
//         }
//     },[])
// }
// //useState如果初始state获取成本高，可以
// const [lazyState,setLazyState]=useState(()=>{
//     const initialState=ExpensiveComputation(args);
//     return initialState;
// })
//useRef能获得render的最新state，且current的变化不会引起重新渲染。useState的值在每次render中都是独立存在的，useRef像是render函数的全局变量

