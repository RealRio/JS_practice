//ES6
class Parent {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
class Son extends Parent {
    constructor(props) {
        super(props);
        this.title = 's';
    }
}
let item = new Son('hinmin');
item.getName()

//ES5
Son.prototype=Object.create(Parent.prototype);
Son.prototype.constructor=Son;
