let obj = {
    foo: 'foo1',
    bar1: function () {
        console.log(this.foo);
    },
    bar2: function () {
        f1 = () => {
            console.log(this.foo);
        }
        f1();
    },
    bar3: () => {
        console.log(this.foo);
    }
}
obj.bar1();
obj.bar2();
obj.bar3();
foo = 'foo2';
obj.bar3()
console.log(this);
[a, b, c] = 'hhl';
console.log(['1', '2', '3'].map(parseInt));  //1,Nan,Nan
(async function f() {
    setTimeout(() => console.log(1), 0);
    var n = await new Promise((resolve, reject) => {
        console.log(2);
        resolve();
    }).then(() => {
        console.log(3);
    })
    console.log(4);
    console.log(n);
})();