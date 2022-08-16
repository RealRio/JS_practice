const reverseIter=function(arr){
    let current=arr.length-1;
    return {
     next:()=>{
        if(current<0){
            return {
                done:true,
                value:undefined
            }
        }
        else{
            return {
                done:false,
                value:arr[current--]
            }
        }
    }
    }
}
const iter=reverseIter([1,2,3]);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());