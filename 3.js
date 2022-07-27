function scheduler(maxTimes){
    let arr=[],wait=[];
    return function(args){




        return new Promise(

        )
    }
}

addRequest=scheduler(2);
const req1=()=>{return new Promise((resolve,reject)=>setTimeout(()=>{resolve('req1')},800))}

addRequest(req1).then(res=>console.log(res));
