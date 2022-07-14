 function waitfn(s){
    return new Promise((resovle)=>{
        setTimeout(resovle,s)
    })
}
function repeat(func,times,wait){
    return async function(...args){
        for(let i=0;i<times;i++){
            func.apply(null,args);
            await waitfn(wait);
    }
}
}
const repaetFunc=repeat(console.log,4,3000);
repaetFunc('hello');