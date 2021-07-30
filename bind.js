Function.prototype.myBind = function (context) {
    const fn = this;
    const args = Array.prototype.slice.call(arguments, 1);
    return function () {
        fn.apply(context, args)
    }
}


var obj = {
    a: 1
}

function bar(b) {
    console.log(this.a);
    console.log(b);
}

/* var foo = bar.bind(obj, 2)
new foo() */


var foo = bar.myBind(obj, 2)
new foo()