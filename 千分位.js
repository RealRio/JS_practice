function format(n){
    let str=n.toString();
    let len=str.length;
    if(len%3===0)
        str=str.match(/\d{3}/g).join(',');
    else{
        pre=len%3;
        str=str.slice(0,pre)+','+str.slice(pre).match(/\d{3}/g).join(',');
    }
    console.log(str);
}
format(10000000);

