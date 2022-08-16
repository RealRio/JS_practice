function divide(sum,n){
    let plusSum=sum*100;
    let res=new Array(n).fill(0);
    for(let i=0;i<n-1;i++){
        let avg=plusSum/n;
        let num1=1+Math.random()*(2*avg);
        num1=Math.round(num1);
        res[i]=num1/100;
        plusSum=plusSum-num1;
    }
    res[n-1]=plusSum/100;
    return res;
}
console.log(divide(200,20));
// var nextPermutation = function(nums) {
//     for(let i=nums.length-1;i>=0;i--)
//         for(let j=nums.length-1;j>i;j--){
//             if(nums[j]>nums[i]){
//                 [nums[i],nums[j]]=[nums[j],nums[i]];
//                 let sorted=nums.slice(0,i+1),unsorted=nums.slice(i+1);
//                 unsorted.sort((a,b)=>a-b);
//                 sorted=sorted.concat(unsorted);
//                 console.log(sorted)
//                 return sorted;
//             }
//         }
//         return nums.reverse();
// };
// nextPermutation([1,3,2])
