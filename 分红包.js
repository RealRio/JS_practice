function divide(sum,n){
    let res=[];
    for(let i=0;i<n-1;i++){
        let num1=Math.random()*sum;
        num1=num1.toFixed(2)
        res.push(+num1);
        sum=sum-num1;
    }
    res.push(sum);
    return res;
}
console.log(divide(200,3));
