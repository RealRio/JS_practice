function repeat(func, times, wait) {
    return function (args) {
        let timer, count = 1;
        (function print() {
            timer = setTimeout(() => {
                func(args);
                if (count >= times) {
                    clearTimeout(timer);
                    return;
                }
                count++;
                print();
            }, wait);
        })();
    }
}
let repaetFunc = repeat(console.log, 4, 3000);
repaetFunc('hello');

//async
function waitfn(s) {
    return new Promise((resovle) => {
        setTimeout(resovle, s)
    })
}
function repeat(func, times, wait) {
    return async function (...args) {
        for (let i = 0; i < times; i++) {
            func.apply(null, args);
            await waitfn(wait);
        }
    }
}
repaetFunc = repeat(console.log, 4, 3000);
repaetFunc('hello');