function flat(arr){
    return Array.isArray(arr)?
    arr.reduce((pre,cur)=>[...pre,...flat(cur)],[])
    :[arr];
}
// console.log(flat([[1],[[2],3]]));
