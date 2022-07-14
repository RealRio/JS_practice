function debounce(fn,delay){
    var timeout=0;
    return function(...args){
        if(timeout)
            clearTimeout(timeout);
        timeout=setTimeout(()=>{
            fn.apply(this,args);
            clearTimeout(timeout);
        },delay)
    }
}