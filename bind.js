Function.prototype.myBind = function (context) {
    const fn = this;
    const args = Array.prototype.slice.call(arguments, 1);
    let resFn = function () {
        const _this = this instanceof resFn? this: context;
        const args2 = Array.prototype.slice.call(arguments);
        fn.apply(_this, args.concat(args2))
    }
    let temp = function(){};
    temp.prototype = this.prototype;
    resFn.prototype = new temp();
    return resFn
}


var obj = {
    a: 1
}

function bar(b, c) {
    console.log(this.a);
    console.log(b);
    console.log(c);
}

bar.prototype.sayHi = function () {
    console.log('hi');
}

/* var foo = bar.bind(obj, 2)
new foo(3).sayHi() */


var foo = bar.myBind(obj, 2)
new foo(3).sayHi()