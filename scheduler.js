function scheduler(max){
    let arr=[],wait=[];
    return function(args){
        return new Promise((resolve,reject)=>{
            args.resolve=resolve;
        if(arr.length<max){
            run(args);
        }
        else{
            wait.push(args);
        }
        })
    }
    function run(request){
        arr.push(request);
        request().then((res)=>{
            request.resolve(res);
            arr.splice(arr.indexOf(request),1);
            if(wait.length)
                run(wait.shift());
        })
    }
}
let addrequest=scheduler(2);
const r1=()=>{return new Promise(resolve=>setTimeout(() => {
    resolve('1111')
}, 1000))}
const r2=()=>{return new Promise(resolve=>setTimeout(() => {
    resolve('2222')
}, 800))}
const r3=()=>{return new Promise(resolve=>setTimeout(() => {
    resolve('3333')
}, 400))}
const r4=()=>{return new Promise(resolve=>setTimeout(() => {
    resolve('4444')
}, 800))}
addrequest(r1).then((res)=>console.log(res));
addrequest(r2).then((res)=>console.log(res));
addrequest(r3).then((res)=>console.log(res));
addrequest(r4).then((res)=>console.log(res));