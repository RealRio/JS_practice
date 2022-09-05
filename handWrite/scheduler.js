function scheduler(maxTimes) {
    let arr = [], wait = [];
    return function (args) {
        return new Promise((resolve, reject) => {
            args.resolve = resolve;
            if (arr.length < maxTimes) {
                run(args);
            }
            else
                wait.push(args);
        })
    }
    function run(arg) {
        arr.push(arg);
        arg().then(res => {
            arg.resolve(res);
            arr.splice(arr.indexOf(arg), 1)
            if (wait.length)
                run(wait.shift());
        })
    }
}

let addrequest = scheduler(2);
const r1 = () => {
    return new Promise(resolve => setTimeout(() => {
        resolve('1111')
    }, 1000))
}
const r2 = () => {
    return new Promise(resolve => setTimeout(() => {
        resolve('2222')
    }, 800))
}
const r3 = () => {
    return new Promise(resolve => setTimeout(() => {
        resolve('3333')
    }, 400))
}
const r4 = () => {
    return new Promise(resolve => setTimeout(() => {
        resolve('4444')
    }, 800))
}
addrequest(r1).then((res) => console.log(res));
addrequest(r2).then((res) => console.log(res));
addrequest(r3).then((res) => console.log(res));
addrequest(r4).then((res) => console.log(res));

class scheduler {
    constructor(max) {
        this.max = max;
        this.runList = [];
        this.waitList = [];
    }
    add(req) {
        return new Promise((resolve) => {
            req.resolve = resolve;
            if (this.runList.length < this.max)
                this.run(req);
            else
                this.waitList.push(req);
        })
    }
    run(task) {
        this.runList.push(task);
        task().then(() => {
            task.resolve();
            this.runList.splice(this.runList.indexOf(task), 1);
            if (this.waitList.length)
                this.run(this.waitList.shift());
        })
    }
}