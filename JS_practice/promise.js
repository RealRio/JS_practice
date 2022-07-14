const state={
    pending:'pending',
    resolved:'resolved',
    reject:'rejected'
};
class myPromise{
    constructor(executor){
        const _that=this;
        _that.status=state.pending;
        _that.data;
        _that.callbacks=[];
        function resolve(value){
            _if(_that.status!==state.pending)
                return;
            _that.status=state.resolved;
            _that.data=value;
            _that.callbacks.forEach(fn=>fn())
        };
        function reject(reason){
            _if(_that.status!==state.pending)
                return;
            _that.status=state.reject;
            _that.data=reason;
            _that.callbacks.forEach(fn=>fn())
        };
        try {
            executor(resolve,reject)
        }catch(err){
            reject(e)
        }
    }
    then(onfulfill,onreject){
        if(this.state=='fulfilled'){
            onfulfill(this.value);
        }
        if(this.state=='rejected'){
            onreject(this.reason)
        }    //异步
        if(this.state=='pending'){
            this.resolvecallback.push(()=>{onfulfill(this.value)});
            this.rejectcallback.push(()=>{onreject(this.reason)});
        }
    }
    static race=function(promises){
        return new Promise((resolve,reject)=>{
            promises.forEach((p)=>{
                Promise.resolve(p).then(value=>resolve(value),
                reason=>reject(reason))
            })
        })
    }
    static all=function(promises){
            return new Promise(function(resolve, reject) {
                var resolvedCount = 0; //成功执行的promise个数
                var promiseNum = promises.length; //数组中一共有几个promise
                var resolvedValues = new Array(promiseNum); //保存成功解决的promise的val
                for(let i = 0; i < promiseNum; i++) {
                    Promise.resolve(promises[i]).then(function(val) {
                        resolvedCount++;
                        resolvedValues[i] = val;
                        //当所有函数都正确执行了，resolve输出所有返回的结果
                        if(resolvedCount == promiseNum) {
                            return resolve(resolvedValues);
                        }
                    }, function(err) {
                        return reject(err);
                    })
                }
            })
    }
}

// let a=new myPromise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one')});
//     myPromise.race([1,2]).then(value=>console.log(value));;
    var p1 = Promise.resolve(1);
    var p2 = Promise.resolve(2);
    //var p2 = Promise.reject('wrong');
    var p3 = Promise.resolve(3);
    promiseAll([p1, p2, p3]).then(function (results) {
      console.log(results);  
    }).catch(function(err){
      console.log(err);
    }); //输出[ 1, 2, 3 ]