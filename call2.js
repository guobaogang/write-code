Function.prototype.myCall = function (context) {
    var context = context || window;
    context.fn = this;
    var args = [];
    for (var index = 1; index < arguments.length; index++) {
        args.push('arguments[' + index + ']')
    }
    var str = 'context.fn(' + args.join() + ')';
    console.log(str);
    var result = eval(str);
    delete context.fn;
    return result;
}

var obj = {
    a: 1
}

function bar(name, age) {
    return {
        name,
        age,
        a: this.a
    }
}

console.log(bar.myCall(obj, 'bob', 18))