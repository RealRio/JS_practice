class Singleton{
    constructor(){
    }
}
    Singleton.getInstance=(function(){
        let instance;
        return function(){
        if(!instance)
            instance=new Singleton();
        return instance;
        }
    })()
let s1=Singleton.getInstance();
console.log(s1)
let s2=Singleton.getInstance();
console.log(s1===s2)