function Person(name, age) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    console.log('hi');
}

/* var jack = new Person('jack');

console.log(jack); */

function myNew(fn, ...args) {
    /* const instance = {}
    if (fn.prototype) {
        instance.__proto__ = fn.prototype
    } */
    const instance = Object.create(fn.prototype);
    const res = fn.apply(instance, args)
    return res instanceof Object ? res : instance;
}

var jack = myNew(Person, 'jack', 18);
//var jack = new Person('jack', 18)

console.log(jack);

jack.sayHi()