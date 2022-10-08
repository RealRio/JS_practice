function selfRunTimes(fn){
    let times=0;
    return ()=>{
        fn();
        console.log("被调用次数为："+(++times));
    };
}
const newFn=selfRunTimes(()=>{return 1;});
newFn();
newFn()
newFn()
newFn()
