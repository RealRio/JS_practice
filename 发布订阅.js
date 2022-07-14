class Pubsub{
    constructor(){
        //handlers[eventType]=<subscribeList>[];
        this.handlers={};
    }
    on(eventType,handler){
        if(!(eventType in this.handlers))
            this.handlers[eventType]=[];
        this.handlers[eventType].push(handler)
    }
    emit(eventType,...args){
        this.handlers[eventType].forEach(func => {
            func(...args);
        });
    }
    remove(eventType,handler){
        if(!handler)
            this.handlers[eventType]=[];
        else{
            const index=this.handlers[eventType].indexOf(handler);
            if(index!==-1)
            this.handlers[eventType].splice(index,1);
        }
    }
}
let test1=new Pubsub();
const fn1 = (...data) => console.log(data);
test1.on("event1", fn1);
test1.on("event1", (...data) => console.log(`fn2: ${data}`));
test1.emit("event1", "hzfe1", "hzfe2", "hzfe3");
test1.remove("event1", fn1);