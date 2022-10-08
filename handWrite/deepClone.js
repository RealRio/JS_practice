function deepClone(source, map = new WeakMap()) {
    const canIter = ['Map', 'Set', 'Array', 'Object'];
    if (source === null)
        return source;
    const type = getType(source);
    if (!canIter.includes(type)) {
        if (type === 'Date')
            return new Date(source);
        if (type === 'RegExp')
            return new RegExp(source);
        if (type === 'Symbol')
            return Symbol(source.description);
        return source;
    }
    let target = new source.constructor();

    if (map.has(source))
        return source;
    else
        map.set(source, true);
    if (type === 'Map') {
        source.ForEach((val, key) => {
            target.set(key, deepClone(val));
        })
        return target;
    }
    if (type === 'Set') {
        source.ForEach((val) => {
            target.set(deepClone(val))
        })
        return target;
    }
    for (let key in source) {
        target[key] = deepClone(source[key])
    }
    return target;
}
function getType(x) {
    return Object.prototype.toString.call(x).slice(8, -1);
}
