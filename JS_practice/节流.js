function throttle(fn,delay){
    let canrun=true;
    return function(...args){
        if(!canrun)
            return ;
        canrun=false;
        setTimeout(() => {
            fn.apply(args);
            canrun=true;
        }, delay);
    }
    
}