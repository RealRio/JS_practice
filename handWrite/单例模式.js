class Singleton {
    constructor(arg) {
        this.name = arg;
        this.oo = 1;
    }
}
Singleton.getInstance = (function () {
    let instance;
    return function (i) {
        if (!instance)
            instance = new Singleton(i);
        else if (i !== instance.name) {
            instance.name = i;
            return instance;
        }
        return instance;
    }
}
)()
let s1 = Singleton.getInstance('123');
console.log(s1)
let s2 = Singleton.getInstance('234');
console.log(s2)