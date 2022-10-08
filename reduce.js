Array.prototype._reduce = function(callback,initialVal){
    const originArr = this;
    if(!originArr.length&&!initialVal)
        throw new Error('Reduce of empty array with no initial value');
    let accumulater;
    if(initialVal!==undefined)
        accumulater=initialVal;
    else
        accumulater=originArr[0];
    for(let i=0;i<originArr.length;i++){
        if(initialVal===undefined&&i===originArr.length-1)
            break;
        accumulater = callback(accumulater,initialVal===undefined?originArr[i+1]:originArr[i],i,originArr)
    }
    return accumulater;
}
console.log([1]._reduce((pre,cur)=>pre+cur));