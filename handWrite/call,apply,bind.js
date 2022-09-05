Function.prototype.mycall = function (obj, ...args) {
    if (!obj)
        obj = window || globalThis;
    let result = null;
    obj.fn = this;
    result = obj.fn(...args);
    delete obj.fn;
    return result;
}
Function.prototype.myapply = function (obj, args) {
    if (!obj)
        obj = window || globalThis;
    let result = null;
    obj.fn = this;
    result = obj.fn(...args);
    delete obj.fn;
    return result;
}
Function.prototype.mybind = function (obj, ...args) {
    if (!obj)
        obj = window || globalThis;
    let fn = this;
    return function F() {
        if (new.target)
            return new fn(...args, ...arguments);
        return fn.apply(obj, args.concat(arguments))
    }
}
