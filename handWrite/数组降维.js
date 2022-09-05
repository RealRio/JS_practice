function flat(arr){
    return Array.isArray(arr)?
    arr.reduce((pre,cur)=>[...pre,...flat(cur)],[])
    :[arr];
}
// console.log(flat([[1],[[2],3]]));
//指定层数的数组降维
Array.prototype._flat=function(num=1){
    if(Array.isArray(this)){
        let _this=this;
        for(let i=0;i<num;i++){
            _this=[].concat(..._this);
        }
        return _this;
    }
    return this;
}
console.log([[1],[[2],3]]._flat(1))
