function repeat(func,times,wait){
    return function(args){
        let timer,count=1;
            (function print(){
                timer=setTimeout(() => {
                    func(args);
                if(count>=times){
                    clearTimeout(timer);
                    return;
                }
                    count++;
                    print();
                }, wait);    
            })();
    }
}
const repaetFunc=repeat(console.log,4,3000);
repaetFunc('hello');